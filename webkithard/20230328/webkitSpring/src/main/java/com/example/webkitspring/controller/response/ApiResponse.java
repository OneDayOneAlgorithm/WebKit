package com.example.webkitspring.controller.response;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Builder
public class ApiResponse<E> {
    private ResponseCode code;
    private E data;

    public static <E> ApiResponse<E> response(ResponseCode code, E data){
        return ApiResponse.<E>builder()
                .code(code)
                .data(data)
                .build();
    }
}
