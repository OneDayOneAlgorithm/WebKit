package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class SampleService {
	public void doSomething() {
		System.out.println(">>> 샘플 서비스의 doSomething 기능 실행");
	}
	
	public int plus(int x, int y) {
		System.out.println(">>> 샘플 서비스의 plus 기능 실행");
		return x + y;
	}
}
