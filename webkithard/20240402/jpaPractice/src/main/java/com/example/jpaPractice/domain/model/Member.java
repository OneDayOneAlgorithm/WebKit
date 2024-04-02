package com.example.jpapractice.domain.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String city;
    private String zipcode;
    @OneToMany
    private Order order;
    @Builder.Default
    private List<Order> orderList = new ArrayList<>();

    public void addOrder(Order order){
        if(order.getMember()!=this){
            orderList.add(order);
            order.setMember(this);
        }
    }

    public void orderRemove(Order order) {
        orderList.remove(order);
    }





}
