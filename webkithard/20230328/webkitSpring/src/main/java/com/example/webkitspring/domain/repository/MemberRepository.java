package com.example.webkitspring.domain.repository;

import com.example.webkitspring.domain.model.Member;

import java.util.Optional;

public abstract class MemberRepository {
    private static Long MEMBER_PK_COUNTER = 0L;

    protected Member setMemberId(Member member){
        member.setId(++MEMBER_PK_COUNTER);
        return member;
    }

    public abstract Member save(Member member);
    public abstract Optional<Member> findById(Long id);
}

