package com.example.webkitspring.persistence;


import com.example.webkitspring.domain.model.Member;
import com.example.webkitspring.domain.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
@Primary
public class MapMemberRepository extends MemberRepository {
    // 예전 꺼 에서 static 빼기 private static Long MEMBER_PK_COUNTER = 0L;
    private Map<Long, Member> storage = new HashMap();
    @Override
    public Member save(Member member) {
        setMemberId(member);
        storage.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member member = storage.get(id);
        return Optional.ofNullable(member);
    }
}
