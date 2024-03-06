package com.example.demo.model;

import static org.junit.jupiter.api.Assertions.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TodoDTOTest {
	private static final Logger logger = LogManager.getLogger(TodoDTOTest.class);

	private static TodoDTO todo = null;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		logger.info(">>>>>> setUpBeforeClass 호출");
		todo = new TodoDTO(1001, "연습", false);
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		logger.info(">>>>>> tearDownAfterClass 호출");
	}

	@BeforeEach
	void setUp() throws Exception {
		logger.info(">>>>>> setUp 호출");
	}

	@AfterEach
	void tearDown() throws Exception {
		logger.info(">>>>>> tearDown 호출");
	}

	@Test
	void testTodoDTO() {
		logger.info(">>>>>> testTodoDTO 호출");
		todo.setDone(true);
		todo.setTitle("스프링 부트는 쉽고 재미있고 생산성도 좋아요!");
		System.out.println(todo);
	}

}
