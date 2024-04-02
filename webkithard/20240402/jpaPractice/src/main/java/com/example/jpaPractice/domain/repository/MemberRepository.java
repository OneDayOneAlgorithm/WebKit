package com.example.jpapractice.domain.repository;

import com.example.jpapractice.domain.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
