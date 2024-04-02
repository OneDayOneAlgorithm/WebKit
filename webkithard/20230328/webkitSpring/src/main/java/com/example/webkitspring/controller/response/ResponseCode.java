package com.example.webkitspring.controller.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@AllArgsConstructor
public enum ResponseCode {
    OK(200000),
    Created(201000);
    int code;
}
