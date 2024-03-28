package org.example.persistence;

import org.example.domain.model.Member;
import org.example.domain.repository.MemberRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class MapMemberRepository implements MemberRepository {
    private static Long MEMBER_PK_COUNTER = 0L;
    private Map<Long, Member> storage = new HashMap();
    @Override
    public Member save(Member member) {
        member.setId(++MEMBER_PK_COUNTER);
        storage.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member member = storage.get(id);
        return Optional.ofNullable(member);
    }
}
