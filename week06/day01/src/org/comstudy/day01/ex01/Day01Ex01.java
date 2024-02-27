package org.comstudy.day01.ex01;

public class Day01Ex01 {

	public static void main(String[] args) {
		// 변수 선언 하기
		// 타입 식별자 = 초기값;
		int age = 24;
		String name = "김유신";
		double number = 0;
		number = 1000;
		age = (int)number; // 더 작은 타입으로 대입하기 위한 형변환. (캐스팅)
		
		System.out.println("Age = " + age);
		System.out.print("Name = ");
		System.out.println(name);
	}

}
