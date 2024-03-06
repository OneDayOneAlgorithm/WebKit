package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.SampleService;

// REST Api방식으로 호출 되고 리턴 결과는 화면 바로 출력
// templets에 뷰 페이지를 만들지 않아도 된다.
@RestController
public class LogController {
	// SampleService를 DI한다.
	@Autowired
	SampleService sampleService;
	
	@GetMapping("/log1")
	public String log1() {
		// 실행 전 후에 AOP가 적용 된다.
		sampleService.doSomething();
		
		return "Log 1 테스트 ";
	}
	
	@GetMapping("/log2")
	public String log2() {
		// 실행 전 후에 AOP가 적용 된다.
		return "결과: " + sampleService.plus(100, 200);
	}
	
}
