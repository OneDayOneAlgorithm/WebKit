package com.example.webkitspring.error.handler;

import com.example.webkitspring.error.exception.BusinessLogicException;
import com.example.webkitspring.error.response.ApiErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class CustomAdivceHandler {
    @ExceptionHandler(BusinessLogicException.class)
    public ApiErrorResponse handleBusinessException(BusinessLogicException e){
        return ApiErrorResponse.of(e.getErrorCode(), e.getMessage());
    }
}
