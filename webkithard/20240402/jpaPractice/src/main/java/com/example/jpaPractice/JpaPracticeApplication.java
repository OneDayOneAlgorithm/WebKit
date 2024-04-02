package com.example.jpapractice;

import com.example.jpapractice.domain.model.Book;
import com.example.jpapractice.domain.repository.BookRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.swing.text.html.parser.Entity;

@SpringBootApplication
public class JpaPracticeApplication {

    public static void main(String[] args) {
        SpringApplication.run(JpaPracticeApplication.class, args);
    }

}
