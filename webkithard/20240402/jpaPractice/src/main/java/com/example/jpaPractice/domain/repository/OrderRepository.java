package com.example.jpapractice.domain.repository;

import com.example.jpapractice.domain.model.Member;
import com.example.jpapractice.domain.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
