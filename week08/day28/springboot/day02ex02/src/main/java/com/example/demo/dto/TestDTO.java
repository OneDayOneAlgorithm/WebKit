package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TestDTO {
    private int id;
    private String message;

    public TestDTO(int id, String message) {
        this.id = id;
        this.message = message;
    }
}
