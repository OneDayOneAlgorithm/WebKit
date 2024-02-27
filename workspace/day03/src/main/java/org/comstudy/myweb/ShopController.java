package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.ShopDTO;

public class ShopController extends HttpServlet {
	static ArrayList<ShopDTO> list = new ArrayList<ShopDTO>();
	   static {
	      // static 멤버 초기화 블럭 (생성자 보다 먼저 실행)
	      list.add(new ShopDTO(1001, "아반데", 40000000) );
	      list.add(new ShopDTO(1002, "소나타", 35000000) );
	      list.add(new ShopDTO(1003, "그랜져", 30000000) );
	      list.add(new ShopDTO(1004, "나세티", 25000000) );
	   }
	   
	   @Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setAttribute("list", list);
	      String viewName = "/WEB-INF/views/shop.jsp";
	      RequestDispatcher view = req.getRequestDispatcher(viewName);
	      view.forward(req, resp);
	   } // end of doGet()

	   @Override
	   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      req.setCharacterEncoding("UTF-8");
	      resp.setCharacterEncoding("UTF-8");
	      resp.setContentType("text/html; charset=UTF-8");
	      
	      int no = Integer.parseInt(req.getParameter("no"));
	      String name = req.getParameter("name");
	      int cost = Integer.parseInt(req.getParameter("cost"));
	      
	      ShopDTO dto = new ShopDTO(no, name, cost);
	      System.out.println(dto);
	      list.add(dto);
	      
	      // 목록으로 리다이렉트
	      resp.sendRedirect(req.getContextPath()+"/shop/list");
	   }
}
