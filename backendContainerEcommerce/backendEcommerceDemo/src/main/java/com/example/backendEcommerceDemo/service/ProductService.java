package com.example.backendEcommerceDemo.service;

import com.example.backendEcommerceDemo.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProductService {
    public String uploadImage(MultipartFile imageFile,String description,double price,String category) throws IOException;
    public byte[] downloadImage(String imageName);
    List<Product> getAllImages();
    String updateImg(Long id,MultipartFile imageFile,String description,double price,String category) throws IOException;
    String deleteImg(Long id);
}
