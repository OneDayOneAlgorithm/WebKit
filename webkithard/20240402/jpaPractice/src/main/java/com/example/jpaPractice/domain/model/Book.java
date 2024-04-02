package com.example.jpapractice.domain.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Book {
    @Id @GeneratedValue
    private Long id;
    @Setter
    private String name;
    @Setter
    private int price;
    private LocalDateTime createdAt;
    @Enumerated(EnumType.STRING)
    private BookType bookType;
}
