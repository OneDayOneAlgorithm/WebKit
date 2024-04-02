package com.example.webkitspring.controller;

import com.example.webkitspring.application.MemberAppService;
import com.example.webkitspring.controller.request.MemberRequest;
import com.example.webkitspring.controller.response.ApiResponse;
import com.example.webkitspring.controller.response.MemberResponse;
import com.example.webkitspring.controller.response.ResponseCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberAppService memberAppService;

//    @GetMapping
//    public ApiResponse<Void> retrieveMemberList(
//            @RequestParam(required = false, defaultValue = "10") Long size,
//            @RequestParam(required = false, defaultValue = "0") Long page
//    ) {
//        return ApiResponse.response(ResponseCode.Created, memberAppService.retrieveMemberList(size, page));
//    }

    @GetMapping("/{id}")
    public ApiResponse<MemberResponse.RegisterResponse> retrieveMember(@PathVariable Long id){
        return ApiResponse.response(ResponseCode.Created, memberAppService.retireveMember(id));
    }

    @PostMapping
    public ApiResponse<MemberResponse.RegisterResponse> register(@Validated @RequestBody MemberRequest.MemberRegisterRequest request) {
        return ApiResponse.response(ResponseCode.Created, memberAppService.register(request));
    }

    @PostMapping("/{id}/rooms")
    public ApiResponse<MemberResponse.AssignResposne> register(@PathVariable Long id, @RequestBody MemberRequest.MemberRoomAssignRequest request) {
        return ApiResponse.response(ResponseCode.Created, memberAppService.assignRoom(id, request));
    }

}
