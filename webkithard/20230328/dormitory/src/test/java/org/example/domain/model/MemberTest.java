package org.example.domain.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MemberTest {


    @Test
    @DisplayName("멤버를 생성할 수 있다.")
    void create_member(){
        // given
        // when
        Member member = new Member(null, "kim", 1);

        // then
        Assertions.assertEquals("kim", member.getName());
        Assertions.assertEquals(1, member.getGrade());
    }

    @Test
    @DisplayName("멤버의 동등성이 맞지 않는 경우를 테스트한다.")
    void equlas_member(){
        //given
        Member memberA = new Member(1L, "kim", 1);
        Member memberB = new Member(2L, "lee", 1);

        //when
        boolean isEqual = memberA.equals(memberB);

        // then
        Assertions.assertFalse(isEqual);
        Assertions.assertEquals(memberA.getId(), 1L);
        Assertions.assertEquals(memberB.getId(), 2L);

    }

    //멤버의 동등성이 일치하는 경우를 테스트한다.


}