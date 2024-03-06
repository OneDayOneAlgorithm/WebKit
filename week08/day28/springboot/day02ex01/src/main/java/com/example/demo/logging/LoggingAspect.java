package com.example.demo.logging;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	@Before("execution(* com.example.demo.service.*.*(..))")
	public void logBefore(JoinPoint joinPoint) {
		System.out.println(">>> Before Service ");
	}
	
	@After("execution(* com.example.demo.service.*.*(..))")
	public void logAfter(JoinPoint joinPint) {
		System.out.println(">>> After Service ");
	}
}
