package com.example.webkitspring.error.response;

import com.example.webkitspring.error.code.ErrorCode;
import jakarta.validation.constraints.NegativeOrZero;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApiErrorResponse {
    private int code;
    private String message;

    public static ApiErrorResponse of(ErrorCode errorCode, String message){
        return ApiErrorResponse.builder()
                .code(errorCode.getCode())
                .message(message)
                .build();
    }

    public static ApiErrorResponse of(ErrorCode errorCode){
        return ApiErrorResponse.builder()
                .code(errorCode.getCode())
                .message(errorCode.getMessage())
                .build();
    }
}
