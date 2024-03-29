package com.example.webkitSpring.application;


import com.example.webkitSpring.domain.model.DormName;
import com.example.webkitSpring.domain.model.FeePolicy;
import com.example.webkitSpring.domain.model.Member;
import com.example.webkitSpring.domain.repository.MemberRepository;

public class MemberAppService {
    private MemberRepository memberRepository;
    private FeePolicy feePolicy;

    public MemberAppService(MemberRepository memberRepository, FeePolicy feePolicy) {
        this.memberRepository = memberRepository;
        this.feePolicy = feePolicy;
    }

    // 멤버를 등록한다.
    public void register(String name, int grade){
        Member member = new Member(name, grade);
        memberRepository.save(member);
    }

    public int assignRoom(Long memberId, DormName dormName){
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 아이디에 멤버가 존재하지 않습니다."));
        // 멤버에 Room 할당하는 로직
        // OldFeePolicy
        // -> 오름이면 200 리턴, 푸름이면 100리턴

        // NewFeePolicy
        // -> 오름이면 400 리턴, 푸름이면 200리턴

        // 가격 계산 로직
        int fee = feePolicy.calculate(dormName);

        return fee;
    }
}
