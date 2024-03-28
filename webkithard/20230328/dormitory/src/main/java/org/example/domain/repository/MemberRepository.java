package org.example.domain.repository;

import org.example.domain.model.Member;

import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
}

