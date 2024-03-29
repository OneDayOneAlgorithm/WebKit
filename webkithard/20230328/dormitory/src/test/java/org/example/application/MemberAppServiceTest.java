package org.example.application;

import org.example.domain.model.DormName;
import org.example.domain.model.Member;
import org.example.domain.model.NewFeePolicy;
import org.example.domain.model.OldFeePolicy;
import org.example.persistence.MapMemberRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MemberAppServiceTest {


    @DisplayName("old policy test")
    @Test
    void old_policy_test(){
        //given
        MapMemberRepository mapMemberRepository = new MapMemberRepository();
        Member member = new Member("kim", 1);
        mapMemberRepository.save(member);
        MemberAppService memberAppService = new MemberAppService(mapMemberRepository, new OldFeePolicy());
        System.out.println("member = " + member.getId());

        //when
        int oreumFee = memberAppService.assignRoom(1L, DormName.OREUM);
        int preumFee = memberAppService.assignRoom(1L, DormName.PUREUM);

        //then
        Assertions.assertEquals(oreumFee,200);
        Assertions.assertEquals(preumFee,100);
    }

    @DisplayName("new policy test")
    @Test
    void new_policy_test(){
        //given
        MapMemberRepository mapMemberRepository = new MapMemberRepository();
        Member member = new Member("kim", 1);
        mapMemberRepository.save(member);
        MemberAppService memberAppService = new MemberAppService(mapMemberRepository, new NewFeePolicy());
        System.out.println("member = " + member.getId());

        //when
        int oreumFee = memberAppService.assignRoom(1L, DormName.OREUM);
        int preumFee = memberAppService.assignRoom(1L, DormName.PUREUM);

        //then
        Assertions.assertEquals(oreumFee,400);
        Assertions.assertEquals(preumFee,200);
    }

}