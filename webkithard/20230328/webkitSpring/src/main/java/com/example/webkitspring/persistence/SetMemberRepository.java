package com.example.webkitspring.persistence;


import com.example.webkitspring.domain.model.Member;
import com.example.webkitspring.domain.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Component
public class SetMemberRepository extends MemberRepository {
    private Set<Member> storage = new HashSet<>();

    @Override
    public Member save(Member member) {
        setMemberId(member);
        storage.add(member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Optional<Member> member = storage.stream()
                .filter(element -> element.getId().equals(id))
                .findFirst();

        return member;
    }
}
