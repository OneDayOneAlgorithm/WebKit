package org.example;

import org.example.application.MemberAppService;
import org.example.domain.model.DormName;
import org.example.domain.model.Member;
import org.example.domain.model.PhoneNumber;
import org.example.domain.repository.MemberRepository;
import org.example.persistence.MapMemberRepository;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        MapMemberRepository mapMemberRepository = new MapMemberRepository();

        MemberAppService memberAppService = new MemberAppService(mapMemberRepository);

        memberAppService.register("kim", 1);

        int fee = memberAppService.assignRoom(1L, DormName.OREUM);
        System.out.println("fee = " + fee);
    }
}