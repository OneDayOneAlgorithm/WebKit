package com.example.webkitspring.domain.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Objects;




@Getter
public class Member {
    @Setter
    private Long id;//DB 부터 받아오는 것
    private String name;
    private int grade;

    private void checkGradeValidation(int grade){
        if(grade<1 || grade>4){
            throw new IllegalArgumentException();
        }
    }

    public Member(Long id, String name, int grade) {
        checkGradeValidation(grade);

        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    public Member(String name, int grade) {
        checkGradeValidation(grade);

        this.name = name;
        this.grade = grade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Member member = (Member) o;
        return Objects.equals(id, member.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
