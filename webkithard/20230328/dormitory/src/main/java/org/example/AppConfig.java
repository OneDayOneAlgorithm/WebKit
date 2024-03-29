package org.example;

import org.example.application.MemberAppService;
import org.example.domain.model.FeePolicy;
import org.example.domain.model.NewFeePolicy;
import org.example.domain.model.OldFeePolicy;
import org.example.domain.repository.MemberRepository;
import org.example.persistence.MapMemberRepository;

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
