package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.BoardDTO;

public class BoardController extends HttpServlet {
	static ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();
	   static {
	      // static 멤버 초기화 블럭 (생성자 보다 먼저 실행)
	      list.add(new BoardDTO("고길동", "첫글", "내용입니다") );
	      list.add(new BoardDTO("홍길동", "반갑습니다", "감사합니다") );
	      list.add(new BoardDTO("서길동", "쌉니다 싸요", "다 팝니다") );
	      list.add(new BoardDTO("박길동", "배고프다", "ㅈㄱㄴ") );
	   }
	   
	   @Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setAttribute("list", list);
	      String viewName = "/WEB-INF/views/board.jsp";
	      RequestDispatcher view = req.getRequestDispatcher(viewName);
	      view.forward(req, resp);
	   } // end of doGet()

	   @Override
	   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setCharacterEncoding("UTF-8");
	      resp.setCharacterEncoding("UTF-8");
	      resp.setContentType("text/html; charset=UTF-8");
	      
	      String name = req.getParameter("name");
	      String title = req.getParameter("title");
	      String content = req.getParameter("content");
	      
	      BoardDTO dto = new BoardDTO(name, title, content);
	      System.out.println(dto);
	      list.add(dto);
	      
	      // 목록으로 리다이렉트
	      resp.sendRedirect(req.getContextPath()+"/board/list");
	   }
}
