package org.example.domain.model;

public class OldFeePolicy implements FeePolicy {
    @Override
    public int calculate(DormName name) {
        if(DormName.OREUM==name){
            return 200;
        }else if(DormName.PUREUM==name){
            return 100;
        }

        throw new IllegalArgumentException("해당하는 기숙사명이 없습니다.");
    }
}
