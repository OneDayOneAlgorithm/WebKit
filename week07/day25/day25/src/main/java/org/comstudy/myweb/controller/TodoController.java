package org.comstudy.myweb.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.TodoDTO;

public class TodoController extends HttpServlet {
	static ArrayList<TodoDTO> todoList = new ArrayList<TodoDTO>();
	static {
		todoList.add(new TodoDTO(0, true,"과제하기"));
		todoList.add(new TodoDTO(1, false,"청소하기"));
		todoList.add(new TodoDTO(2, true,"저녁먹기"));
		todoList.add(new TodoDTO(3, true,"공부하기"));
	}
	static int cnt = 4;
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String viewName = "";
		switch(req.getRequestURI()) {
		case "/day04/todo/list" : 
			req.setAttribute("todoList", todoList);
			viewName = "/WEB-INF/views/todo/list.jsp";
			break;
		case "/day04/todo/delete" : 
			System.out.println(todoList);
			int no = Integer.parseInt(req.getParameter("no"));
			if(no != -1) {
				todoList.remove(no);
			}
			resp.sendRedirect("/day04/todo/list");
			return;
		}
		RequestDispatcher view = req.getRequestDispatcher(viewName);
		view.forward(req, resp);
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		String title = req.getParameter("title");

		switch(req.getRequestURI()){
		case "/day04/todo/input" :
			todoList.add(new TodoDTO(cnt, false, title));
			cnt ++;
			break;
		}
		resp.sendRedirect("/day04/todo/list");
	}
}
