package com.example.webkitspring.error.exception;

import com.example.webkitspring.error.code.ErrorCode;

public class EntityNotFoundException extends BusinessLogicException {
    public EntityNotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }

    public EntityNotFoundException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }

    public EntityNotFoundException(String message) {
        super(ErrorCode.ENTITY_NOT_FOUND, message);
    }
}
