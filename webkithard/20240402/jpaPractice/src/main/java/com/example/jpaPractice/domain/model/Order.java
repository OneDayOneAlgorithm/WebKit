package com.example.jpapractice.domain.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "order")
public class Order {
    @Id @GeneratedValue
    private Long id;
    private String orderdate;
    private String status;
    @ManyToOne
    private Member member;

    public void setMember(Member member){
        if(this.member !=null) {
            this.member.orderRemove(this);
        }

        this.member = member;
        member.addOrder(this);
    }
}
