package com.example.jpapractice.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id @GeneratedValue
    private Long id;
    @OneToMany(mappedBy = "team")
    @Builder.Default
    private List<Member> memberList = new ArrayList<>();

//    public void addMember(Member member){
//        if(member.getTeam()!=this){
//            memberList.add(member);
//            member.setTeam(this);
//        }
//    }
//
//    public void mebmerRemove(Member member) {
//        memberList.remove(member);
//    }
}
