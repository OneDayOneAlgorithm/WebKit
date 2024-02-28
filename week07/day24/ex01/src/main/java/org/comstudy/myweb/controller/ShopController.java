package org.comstudy.myweb.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.CarDTO;

public class ShopController extends HttpServlet {
	static ArrayList<CarDTO> carList = new ArrayList<CarDTO>();
	static {
		carList.add(new CarDTO(101, "SONATA","HYUNDAI",2300,2022));
		carList.add(new CarDTO(102, "BMW","BMW",5530,2020));
		carList.add(new CarDTO(103, "K9","KIA",5330,2021));
		carList.add(new CarDTO(104, "GRANDEUR","HYUNDAI",3330,2022));
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// /shop/list로 요청이 들어오면
		// /WEB-INF/views/shop/list.jsp 페이지로 forward 되도록 하기
		
		String ctxPath = req.getContextPath() + "/shop/";
		String reqUri = req.getRequestURI();
		int beginIndex = ctxPath.length();
		String endPoint = reqUri;
		if(beginIndex <= reqUri.length()) {			
			endPoint = reqUri.substring(beginIndex);
		}
		//System.out.println(endPoint);
		
		String prefix = "/WEB-INF/views/shop/";
		String suffix = ".jsp";
		String viewName = "list";
		
		// local(지역변수) 선언 시 초기화 필수.
		CarDTO car = null;
		int no = -1;
		String name = null;
		String company = null;
		int price = 0;
		int year = 0;
		int index = -1;
		
		switch(endPoint) {
		case "list" : 
			System.out.println(carList);
			req.setAttribute("carList", carList);
			viewName = "list";
			break;
		case "input" : 
			// 리스트에 데이터 저장은 doPost()에서 처리 한다.
			viewName = "input";
			break;
		case "detail" : 
			no = Integer.parseInt(req.getParameter("no"));
			
			for(int i=0; i<carList.size(); i++) {
				if(carList.get(i).getNo() == no) {
					car = carList.get(i);
					break;
				}
			}
			req.setAttribute("car", car);
			viewName = "detail";
			break;
		case "modify" : 
			no = Integer.parseInt(req.getParameter("no"));
			// CarDTO에 equals와 hashCode가 재정의 되어야 한다. (자동 생성 가능)
			index = carList.indexOf(new CarDTO(no));
			if(index != -1) {
				car = carList.get(index);
			}
			req.setAttribute("car", car);
			viewName = "modify";
			break;
		case "delete" : 
			no = Integer.parseInt(req.getParameter("no"));
			// CarDTO에 equals와 hashCode가 재정의 되어야 한다. (자동 생성 가능)
			index = carList.indexOf(new CarDTO(no));
			if(index != -1) {
				carList.remove(index);
			}
			resp.sendRedirect("list");
			return; // redirect 후 dispatcher 하는 것을 방지 하기 위함.
		}
		viewName = prefix + viewName + suffix;
		RequestDispatcher view = 
				req.getRequestDispatcher(viewName);
		view.forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		// 글입력 시 파라미터 정보 받아오기
		String ctxPath = req.getContextPath() + "/shop/";
		String reqUri = req.getRequestURI();
		int beginIndex = ctxPath.length();
		String endPoint = reqUri;
		if(beginIndex < reqUri.length()) {			
			endPoint = reqUri.substring(beginIndex);
		}
		
		int no = Integer.parseInt(req.getParameter("no"));
		String name = req.getParameter("name");
		String company = req.getParameter("company");
		int price = Integer.parseInt(req.getParameter("price"));
		int year = Integer.parseInt(req.getParameter("year"));
		
		switch(endPoint){
		case "input" :
			carList.add(new CarDTO(no, name, company, price, year));
			break;
		case "modify" :
			int index = carList.indexOf(new CarDTO(no));
			carList.get(index).setName(name);
			carList.get(index).setCompany(company);
			carList.get(index).setPrice(price);
			carList.get(index).setYear(year);
			System.out.println("수정완료!");
			break;
		}
		
		resp.sendRedirect("list");
	}
}