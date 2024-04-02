package com.example.webkitspring.domain.model;

import org.springframework.stereotype.Component;

//@Component
public class NewFeePolicy implements FeePolicy{
    @Override
    public int calculate(DormName name) {
        if(DormName.OREUM==name){
            return 400;
        }else if(DormName.PUREUM==name){
            return 200;
        }

        throw new IllegalArgumentException("해당하는 기숙사명이 없습니다.");
    }
}
