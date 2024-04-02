package com.example.jpapractice.application;

import com.example.jpapractice.controller.request.BookRequest;
import com.example.jpapractice.domain.model.Book;
import com.example.jpapractice.domain.model.Member;
import com.example.jpapractice.domain.model.Order;
import com.example.jpapractice.domain.model.Team;
import com.example.jpapractice.domain.repository.BookRepository;
import com.example.jpapractice.domain.repository.MemberRepository;
import com.example.jpapractice.domain.repository.OrderRepository;
import com.example.jpapractice.domain.repository.TeamRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class BookAppService {
    private final BookRepository bookRepository;
    private final MemberRepository memberRepository;
    private final TeamRepository teamRepository;
    private final OrderRepository orderRepository;
    private final EntityManager em;
    @Transactional
    public String createBook(BookRequest.CreateBook request) {
        Book book = Book.builder()
                .name(request.getName())
                .price(request.getPrice())
                .bookType(request.getBookType())
                .createdAt(LocalDateTime.now())
                .build();

        bookRepository.save(book);

        return book.getId().toString();
    }

    @Transactional
    public String updateBook(Long id, BookRequest.CreateBook request) {
        Book book = bookRepository.findById(id)
                .orElseThrow();

        book.setName(request.getName());
        book.setPrice(request.getPrice());

        bookRepository.save(book);

        return book.getId().toString();
    }

    @Transactional
    public String remove(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow();

        bookRepository.remove(book);

        return book.getId().toString();
    }

//    @Transactional
//    public String addMember(Long teamId, Long memberId) {
//        Team team = teamRepository.findById(teamId)
//                .orElseThrow();
//
//        Member member = memberRepository.findById(memberId)
//                .orElseThrow();
//
//        team.addMember(member);
//        member.setTeam(team);
//
//
//        return null;
//    }

    @Transactional
    public String addOrder(Long memberId, Long orderId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        Order order = orderRepository.findById(orderId)
                .orElseThrow();

        member.addOrder(order);
        order.setMember(member);


        return null;
    }
}
