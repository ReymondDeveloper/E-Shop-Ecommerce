package com.example.backendEcommerceDemo.controller;

import com.example.backendEcommerceDemo.model.Product;
import com.example.backendEcommerceDemo.model.dto.ProductDTO;
import com.example.backendEcommerceDemo.service.ProductService;
import com.example.backendEcommerceDemo.util.ImageUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/image")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file,
                                         @RequestParam("description") String description,
                                         @RequestParam("price") double price,
                                         @RequestParam("category")String category
                                        ) throws IOException {
        String uploadImage = productService.uploadImage(file,description,price,category);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName) {
        byte[] imageData = productService.downloadImage(fileName);
        MediaType mediaType = getMediaTypeForFileName(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(mediaType)
                .body(imageData);
    }

    private MediaType getMediaTypeForFileName(String fileName) {
        String fileExtension = getFileExtension(fileName).toLowerCase();
        return switch (fileExtension) {
            case "png" -> MediaType.IMAGE_PNG;
            case "jpg", "jpeg" -> MediaType.IMAGE_JPEG;
            case "webp" -> MediaType.parseMediaType("image/webp");
            default ->
                // default to octet-stream if the type is unknown
                    MediaType.APPLICATION_OCTET_STREAM;
        };
    }

    private String getFileExtension(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            return "";
        }
        int dotIndex = fileName.lastIndexOf('.');
        return (dotIndex == -1) ? "" : fileName.substring(dotIndex + 1);
    }

//    @GetMapping
//    public ResponseEntity<List<ProductDTO>> getAllImages() {
//        List<Product> images = productService.getAllImages();
//        List<ProductDTO> imageDto = images.stream().map(product -> {
//            String base64Image = Base64.getEncoder().encodeToString(product.getImageData());
//            return new ProductDTO(
//                    product.getId(),
//                    product.getName(),
//                    product.getType(),
//                    base64Image,
//                    product.getDescription(),
//                    product.getPrice()
//            );
//        }).collect(Collectors.toList());
//        return ResponseEntity.status(HttpStatus.OK).body(imageDto);
//    }
@GetMapping
public ResponseEntity<List<ProductDTO>> getAllImages() {
    List<Product> images = productService.getAllImages();
    List<ProductDTO> imageDto = images.stream().map(product -> {
        try {
            byte[] decompressedImageData = ImageUtils.decompressImage(product.getImageData());
            String base64Image = Base64.getEncoder().encodeToString(decompressedImageData);
            return new ProductDTO(
                    product.getId(),
                    product.getName(),
                    product.getType(),
                    product.getCategory(),
                    base64Image,
                    product.getDescription(),
                    product.getPrice()
            );
        } catch (DataFormatException | IOException e) {
            throw new RuntimeException("Error decompressing image", e);
        }
    }).collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(imageDto);
}


    @PutMapping("/{id}")
    public ResponseEntity<?> updateImage(@PathVariable Long id,
                                         @RequestParam("image") MultipartFile file,
                                         @RequestParam("description") String description,
                                         @RequestParam("price") double price,
                                         @RequestParam("category") String category) throws IOException {
        String updateImage = productService.updateImg(id, file, description, price,category);
        return ResponseEntity.status(HttpStatus.OK).body(updateImage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) {
        String deleteMessage = productService.deleteImg(id);
        return ResponseEntity.status(HttpStatus.OK).body(deleteMessage);
    }

}
