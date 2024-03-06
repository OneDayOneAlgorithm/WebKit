package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TestDTO;
import com.example.demo.dto.TestRequestBodyDTO;

@RestController
@RequestMapping("test")
public class TestController {
	private static final Logger logger = LogManager.getLogger(TestController.class);

	// 이부분에 파라미터 전달 및 response 테스트 함수들 추가
	@GetMapping("/")
	public String testGet() {
		logger.info("GET - /test 요청 됨");
		return "GET - /test 요청 됨";
	}
	
	@PostMapping("/")
	public String testPost() {
		logger.info("POST - /test 요청 됨");
		return "POST - /test 요청 됨";
	}
	
	@GetMapping("/{id}")
	public String testPathParam(@PathVariable(required = true) int id) {
		return "GET - testPathParam : " + id;
	}
	
	// 쿼리 스트링 받기
	@GetMapping("/requestParam")
	public String requestParm(@RequestParam(required = true) int id) {
		return "Hello World! Request Param ID : " + id;
	}

	@GetMapping("/requestBody")
	public String requestBody(@RequestBody TestRequestBodyDTO testRequestBodyDTO) {
		return "Hello World! ID " + testRequestBodyDTO.getId() + " Message : " + testRequestBodyDTO.getMessage();
	}
	
	@GetMapping("/selectAll")
    public List<TestDTO> selectAll() {
        TestDTO obj1 = new TestDTO(1, "Message 1");
        TestDTO obj2 = new TestDTO(2, "Message 2");
        TestDTO obj3 = new TestDTO(3, "Message 3");

        List<TestDTO> list = Arrays.asList(obj1, obj2, obj3);

        return list;
    }
}
