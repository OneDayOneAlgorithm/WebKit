package org.example.persistence;

import org.example.domain.model.Member;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class SetMemberRepositoryTest {


    @DisplayName("멤버를 레포지토리에 저장할 수 있다.")
    @Test
    void save(){
        //given
        SetMemberRepository setMemberRepository = new SetMemberRepository();
        Member member = new Member("kim", 1);

        //when
        Member savedMember = setMemberRepository.save(member);

        //then
        Assertions.assertNotNull(savedMember.getId());
    }


    @DisplayName("멤버를 레포지토리에서 가지고 올 수 있다.")
    @Test
    void findById(){
        //given
        SetMemberRepository setMemberRepository = new SetMemberRepository();
        Member member = new Member("kim", 1);
        Member savedMember = setMemberRepository.save(member);

        //when
        Optional<Member> foundMember = setMemberRepository.findById(savedMember.getId());

        //then
        Assertions.assertNotNull(foundMember.get());
        Assertions.assertEquals(foundMember.get().getId(), savedMember.getId());
    }

    @DisplayName("레포지토리에 찾은 아이디에 해당하는 멤버가 없는경우, optional 비어있다.")
    @Test
    void findById_not_found(){
        //given
        SetMemberRepository setMemberRepository = new SetMemberRepository();
        Member member = new Member("kim", 1);
        Member savedMember = setMemberRepository.save(member);

        //when
        Optional<Member> foundMember = setMemberRepository.findById(2L);

        //then
        Assertions.assertThrows(NoSuchElementException.class, () -> foundMember.get());
    }

}