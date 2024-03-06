package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.service.SampleService;

@SpringBootApplication
public class Day02ex01Application {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(Day02ex01Application.class, args);
	
		// DL : Dependency Lookup 테스트 
        SampleService sampleService = ctx.getBean(SampleService.class);
        sampleService.doSomething();
        int result = sampleService.plus(10, 5);
        System.out.println("Result: " + result);
	}
}
