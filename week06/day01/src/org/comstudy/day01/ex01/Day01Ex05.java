package org.comstudy.day01.ex01;

import java.util.Scanner;

class People{
	int age;
	String name;
	String address;
}

public class Day01Ex05 {
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("여기는 main함수");
		test(null);
	}
	
	public static void test(String[] args) {
		People person1 = new People();
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		
		System.out.print("성명 입력: ");
		person1.name = scan.next();
		System.out.print("나이 입력: ");
		person1.age = scan.nextInt();
		System.out.print("주소 입력: ");
		person1.address = scan2.nextLine();
		
		System.out.printf("%s, %d, %s\n",person1.name, person1.age, person1.address);
	}

}
