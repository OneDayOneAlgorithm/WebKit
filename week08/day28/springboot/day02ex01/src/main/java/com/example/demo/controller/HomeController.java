package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.model.TodoDTO;

@Controller
public class HomeController {
	private static final Logger logger = LogManager.getLogger(HomeController.class);

	
	@GetMapping("/")
	public String home(Model model) {
		TodoDTO todo = new TodoDTO(101, "저녁 먹고 탁구 치기", false);
		System.out.println(todo);
		
		// Logger 객체를 이용한 로그 출력
		logger.info("todo: " + todo);
		
		// 뷰에서 사용 하도록 바인딩 한다.
		model.addAttribute("todo", todo);
		
		// src/main/resources/templates의 home.html을 forward 한다.
		return "home";
	}	
}
