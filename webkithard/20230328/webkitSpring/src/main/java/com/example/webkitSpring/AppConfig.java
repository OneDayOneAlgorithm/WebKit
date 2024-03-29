package com.example.webkitSpring;


import com.example.webkitSpring.application.MemberAppService;
import com.example.webkitSpring.domain.model.FeePolicy;
import com.example.webkitSpring.domain.model.NewFeePolicy;
import com.example.webkitSpring.domain.repository.MemberRepository;
import com.example.webkitSpring.persistence.MapMemberRepository;

public class AppConfig {
    public FeePolicy feePolicy(){
        return new NewFeePolicy();
    }

    public MemberRepository memberRepository(){
        return new MapMemberRepository();
    }

    public MemberAppService memberAppService(){
        return new MemberAppService(memberRepository(), feePolicy());
    }
}
