package org.comstudy.day01.ex01;
import java.util.Scanner;
public class Day01Ex04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		String name = null;
		int age = 0;
		String address = null;
		
		System.out.print("이름 입력: ");
		name = scanner.next();
		System.out.print("나이 입력: ");
		age = scanner.nextInt();
		System.out.print("주소입력: ");
		address = scan2.nextLine();
		System.out.printf("성명:%s, 나이:%d, 주소:%s", name, age, address);
	}

}
