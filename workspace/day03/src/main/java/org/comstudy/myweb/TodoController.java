package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.BoardDTO;
import org.comstudy.myweb.model.TodoDTO;

public class TodoController extends HttpServlet {
	static ArrayList<TodoDTO> list = new ArrayList<TodoDTO>();
	   static {
	      // static 멤버 초기화 블럭 (생성자 보다 먼저 실행)
	      list.add(new TodoDTO(0, "운동하기") );
	      list.add(new TodoDTO(1, "과제하기") );
	      list.add(new TodoDTO(2, "공부하기") );
	      list.add(new TodoDTO(3, "청소하기") );
	   }
	   
	   @Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setAttribute("list", list);
	      String viewName = "/WEB-INF/views/todo.jsp";
	      RequestDispatcher view = req.getRequestDispatcher(viewName);
	      view.forward(req, resp);
	   } // end of doGet()

	   @Override
	   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setCharacterEncoding("UTF-8");
	      resp.setCharacterEncoding("UTF-8");
	      resp.setContentType("text/html; charset=UTF-8");
	      
	      int no = Integer.parseInt(req.getParameter("no"));
	      String title = req.getParameter("title");
	      
	      TodoDTO dto = new TodoDTO(no, title);
	      System.out.println(dto);
	      list.add(dto);
	      
	      // 목록으로 리다이렉트
	      resp.sendRedirect(req.getContextPath()+"/todo/list");
	   }
}
