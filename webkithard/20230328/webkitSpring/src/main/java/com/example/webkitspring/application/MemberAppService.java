package com.example.webkitspring.application;


import com.example.webkitspring.controller.request.MemberRequest;
import com.example.webkitspring.controller.response.MemberResponse;
import com.example.webkitspring.domain.model.DormName;
import com.example.webkitspring.domain.model.FeePolicy;
import com.example.webkitspring.domain.model.Member;
import com.example.webkitspring.domain.repository.MemberRepository;
import com.example.webkitspring.error.exception.EntityNotFoundException;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberAppService {
    private final MemberRepository mapMemberRepository;
    private final FeePolicy feePolicy;

//    @Autowired
//    public MemberAppService(MemberRepository mapMemerRepository, FeePolicy feePolicy) {
//        this.mapMemberRepository = mapMemerRepository;
//        this.feePolicy = feePolicy;
//    }


    // 멤버를 등록한다.
    public MemberResponse.RegisterResponse register(MemberRequest.MemberRegisterRequest request){
        Member member = new Member(request.getName(), request.getGrade());
        mapMemberRepository.save(member);

        return MemberResponse.RegisterResponse.of(member);
    }

    public MemberResponse.AssignResposne assignRoom(Long memberId, MemberRequest.MemberRoomAssignRequest request){
        Member member = mapMemberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 아이디에 멤버가 존재하지 않습니다."));

        DormName dormName = DormName.valueOf(request.getRoomName());

        // 멤버에 Room 할당하는 로직
        // OldFeePolicy
        // -> 오름이면 200 리턴, 푸름이면 100리턴

        // NewFeePolicy
        // -> 오름이면 400 리턴, 푸름이면 200리턴

        // 가격 계산 로직
        int fee = feePolicy.calculate(dormName);

        return MemberResponse.AssignResposne.of(member, fee);
    }

    public void retrieveMemberList(Long size, Long page) {
        System.out.println("size = " + size);
        System.out.println("size = " + size);
    }

    public MemberResponse.RegisterResponse retireveMember(Long id) {
        Member member = mapMemberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("해당하는 멤버를 찾을 수 없습니다."));

        return MemberResponse.RegisterResponse.of(member);
    }
}
