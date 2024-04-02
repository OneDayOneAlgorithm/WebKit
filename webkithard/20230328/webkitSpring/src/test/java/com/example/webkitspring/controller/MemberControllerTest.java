package com.example.webkitspring.controller;

import com.example.webkitspring.application.MemberAppService;
import com.example.webkitspring.controller.request.MemberRequest;
import com.example.webkitspring.controller.response.MemberResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest
class MemberControllerTest {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    MemberAppService memberAppService;

    ObjectMapper om = new ObjectMapper();

    @DisplayName("멤버를 생성할 수 있다.")
    @Test
    void create_member() throws Exception {
        //given
        given(memberAppService.register(any(MemberRequest.MemberRegisterRequest.class)))
                .willReturn(
                        MemberResponse.RegisterResponse.builder()
                                .id(1L)
                                .name("kim")
                                .grade(1)
                                .build()
                );

        MemberRequest.MemberRegisterRequest reqObj = MemberRequest.MemberRegisterRequest.builder()
                .name("lee")
                .grade(2)
                .build();

        String reqBody = om.writeValueAsString(reqObj);

        //when //then
        mockMvc.perform(
                        post("/members")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(reqBody)
                )
                .andDo(print())
                .andExpect(jsonPath("$.code").value("Created"))
                .andExpect(jsonPath("$.data").isNotEmpty())
                .andExpect(jsonPath("$.data.id").value(1L))
                .andExpect(jsonPath("$.data.name").value("kim"))
                .andExpect(jsonPath("$.data.grade").value(1));

    }


    @DisplayName("멤버 상세 조회를 할 수 있다.")
    @Test
    void retrieve_memmber_detail() throws Exception {
        //given
        given(memberAppService.retireveMember(anyLong()))
                .willReturn(
                        MemberResponse.RegisterResponse.builder()
                                .id(1L)
                                .name("kim")
                                .grade(1)
                                .build()
                );

        //when //then
        mockMvc.perform(get("/members/{id}", 1L))
                .andDo(print())
                .andExpect(jsonPath("$.code").value("Created"))
                .andExpect(jsonPath("$.data").isNotEmpty())
                .andExpect(jsonPath("$.data.id").value(1L))
                .andExpect(jsonPath("$.data.name").value("kim"))
                .andExpect(jsonPath("$.data.grade").value(1));

    }


}