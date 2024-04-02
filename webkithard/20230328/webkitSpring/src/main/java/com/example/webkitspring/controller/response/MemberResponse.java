package com.example.webkitspring.controller.response;

import com.example.webkitspring.domain.model.Member;
import lombok.*;

@Getter
public class MemberResponse {
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    @Builder
    public static class RegisterResponse {
        private Long id;
        private String name;
        private int grade;


        public static RegisterResponse of(Member member) {
            return RegisterResponse.builder()
                    .id(member.getId())
                    .name(member.getName())
                    .grade(member.getGrade())
                    .build();
        }

    }

    @Data
    @Builder
    public static class AssignResposne {
        private Long id;
        private String name;
        private int grade;
        private int fee;


        public static AssignResposne of(Member member, int fee) {
            return AssignResposne.builder()
                    .id(member.getId())
                    .name(member.getName())
                    .grade(member.getGrade())
                    .fee(fee)
                    .build();
        }
    }

    @Data
    @Builder
    public static class MemberList {
        private Long id;
        private String name;

        public static MemberList of(Member member) {
            return MemberList.builder()
                    .id(member.getId())
                    .name(member.getName())
                    .build();
        }
    }
}
