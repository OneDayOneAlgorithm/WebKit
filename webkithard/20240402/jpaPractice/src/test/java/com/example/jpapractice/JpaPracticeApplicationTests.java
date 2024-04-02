package com.example.jpapractice;

import com.example.jpapractice.domain.model.Book;
import com.example.jpapractice.domain.repository.BookRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class JpaPracticeApplicationTests {
    @Autowired
    BookRepository bookRepository;

    @DisplayName("")
    @Test
    @Transactional
    void test(){
        //given
//        Book book = Book.builder()
//                .price(100)
//                .name("book")
//                .build();
//
//        bookRepository.save(book);
        //when

        //then
    }

}
