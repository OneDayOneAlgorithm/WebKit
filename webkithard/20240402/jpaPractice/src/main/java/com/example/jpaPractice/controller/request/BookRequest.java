package com.example.jpapractice.controller.request;

import com.example.jpapractice.domain.model.BookType;
import lombok.Data;

public class BookRequest {
    @Data
    public static class CreateBook{
        private String name;
        private int price;
        private BookType bookType;
    }
}
