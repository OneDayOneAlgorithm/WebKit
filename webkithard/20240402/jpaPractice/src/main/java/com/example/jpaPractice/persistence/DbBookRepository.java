package com.example.jpapractice.persistence;

import com.example.jpapractice.domain.model.Book;
import com.example.jpapractice.domain.repository.BookRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
@RequiredArgsConstructor
public class DbBookRepository implements BookRepository {
    private final EntityManager em;
    @Override
    public Book save(Book book) {
        em.persist(book);
        return book;
    }

    @Override
    public Optional<Book> findById(Long id) {
        Book book = em.find(Book.class, id);
        return Optional.ofNullable(book);
    }

    @Override
    public void remove(Book book) {
        em.remove(book);
    }
}
