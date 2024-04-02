package com.example.jpapractice.domain.repository;

import com.example.jpapractice.domain.model.Book;

import java.util.Optional;

public interface BookRepository {
    Book save(Book book);
    Optional<Book> findById(Long id);
    void remove(Book book);
}
