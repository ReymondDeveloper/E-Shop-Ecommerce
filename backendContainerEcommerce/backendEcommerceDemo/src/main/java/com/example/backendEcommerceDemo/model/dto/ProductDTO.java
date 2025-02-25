package com.example.backendEcommerceDemo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
    private Long id;
    private String name;
    private String type;
    private String category;
    private String imageData; // base64-encoded
    private String description;
    private double price;
}
