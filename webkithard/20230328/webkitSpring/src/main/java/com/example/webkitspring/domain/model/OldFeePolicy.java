package com.example.webkitspring.domain.model;

import org.springframework.stereotype.Component;

@Component
public class OldFeePolicy implements FeePolicy {
    private int sale = 2;
    @Override
    public int calculate(DormName name) {
        if(DormName.OREUM==name){
            return 200/sale;
        }else if(DormName.PUREUM==name){
            return 100/sale;
        }

        throw new IllegalArgumentException("해당하는 기숙사명이 없습니다.");
    }
}
