package com.example.webkitspring.error.code;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ErrorCode {
    BAD_REQUEST(401000, "Bad Request"),
    NOT_FOUND(404000, "Not Found"),
    ENTITY_NOT_FOUND(404001, "Entity Not Found");
    int code;
    String message;
}
