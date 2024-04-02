package com.example.webkitspring;

import com.example.webkitspring.application.MemberAppService;
import com.example.webkitspring.domain.model.DormName;
import com.example.webkitspring.domain.model.Member;
import com.example.webkitspring.domain.repository.MemberRepository;
import com.example.webkitspring.persistence.MapMemberRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class WebkitSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebkitSpringApplication.class, args);
    }

}
