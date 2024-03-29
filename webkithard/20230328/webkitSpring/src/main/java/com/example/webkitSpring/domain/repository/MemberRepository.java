package com.example.webkitSpring.domain.repository;



import com.example.webkitSpring.domain.model.Member;

import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
}

