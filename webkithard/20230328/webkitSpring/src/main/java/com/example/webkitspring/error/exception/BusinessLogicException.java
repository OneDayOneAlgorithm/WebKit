package com.example.webkitspring.error.exception;

import com.example.webkitspring.error.code.ErrorCode;
import lombok.Getter;

@Getter
public class BusinessLogicException extends RuntimeException {
    protected ErrorCode errorCode;
    public BusinessLogicException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public BusinessLogicException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

}
