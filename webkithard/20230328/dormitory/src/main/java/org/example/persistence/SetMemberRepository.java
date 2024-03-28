package org.example.persistence;

import org.example.domain.model.Member;
import org.example.domain.repository.MemberRepository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;

public class SetMemberRepository implements MemberRepository {
    private static Long MEMBER_PK_COUNTER = 0L;
    private Set<Member> storage = new HashSet<>();

    @Override
    public Member save(Member member) {
        member.setId(++MEMBER_PK_COUNTER);
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
