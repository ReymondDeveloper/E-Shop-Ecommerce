package com.example.backendEcommerceDemo.service;

import com.example.backendEcommerceDemo.model.Product;
import com.example.backendEcommerceDemo.repository.ProductRepository;
import com.example.backendEcommerceDemo.util.ImageUtils;
import org.apache.commons.lang3.exception.ContextedRuntimeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;

@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;
    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public String uploadImage(MultipartFile imageFile,String description,double price,String category) throws IOException {
        var imageToSave = Product.builder()
                .name(imageFile.getOriginalFilename())
                .type(imageFile.getContentType())
                .imageData(ImageUtils.compressImage(imageFile.getBytes()))
                .description(description)
                .price(price)
                .category(category)
                .build();
        productRepository.save(imageToSave);
        return "file uploaded successfully : " + imageFile.getOriginalFilename();
    }

    @Override
    public byte[] downloadImage(String imageName) {
        Optional<Product> dbImage = productRepository.findByName(imageName);

        return dbImage.map(image -> {
            try {
                return ImageUtils.decompressImage(image.getImageData());
            } catch (DataFormatException | IOException exception) {
                throw new ContextedRuntimeException("Error downloading an image", exception)
                        .addContextValue("Image ID",  image.getId())
                        .addContextValue("Image name", imageName);
            }
        }).orElse(null);
    }


    @Override
    public List<Product> getAllImages() {
        return productRepository.findAll();
    }

    @Override
    public String updateImg(Long id, MultipartFile imageFile, String description, double price,String category) throws IOException {
        Optional<Product> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setName(imageFile.getOriginalFilename());
            product.setType(imageFile.getContentType());
            product.setImageData(ImageUtils.compressImage(imageFile.getBytes()));
            product.setDescription(description);
            product.setPrice(price);
            product.setCategory(category);
            productRepository.save(product);
            return "File updated successfully: " + imageFile.getOriginalFilename();
        } else {
            return "Image not found";
        }
    }

    @Override
    public String deleteImg(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return "Image deleted successfully";
        } else {
            return "Image not found";
        }
    }
}
