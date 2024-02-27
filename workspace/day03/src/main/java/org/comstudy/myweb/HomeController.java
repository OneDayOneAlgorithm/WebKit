package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.model.UserDTO;

public class HomeController extends HttpServlet {
   
   static ArrayList<UserDTO> list = new ArrayList<UserDTO>();
   static {
      // static 멤버 초기화 블럭 (생성자 보다 먼저 실행)
      list.add(new UserDTO(1001, "김길동", "의사") );
      list.add(new UserDTO(1002, "이길동", "프로그래머") );
      list.add(new UserDTO(1003, "박길동", "변호사") );
      list.add(new UserDTO(1004, "양길동", "투자가") );
   }
   // home.jsp에서 목록을 출력 하도록 수정 하세요.
   // request에 list를 바인딩 해서 jsp에서 사용.

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      System.out.println("GET - /home");
      // Forward 방식
      // Serlvet에서 데이터 처리를 하고 결과는 JSP페이지데 보이도록 한다.
      // RequestDispatcher를 이용한 forward
      
      // request에 뷰에 전달할 데이터를 바인딩한다. 
      // 바인딩: forward등의 상황에서 데이터를 특정 객체에 담아서 공유 하는것.
      // 바인딩 가능한 내장객체 request, session, application
      String name = "홍길동";
      req.setAttribute("name", name);
      // JSP에서 request.getAttribute("name");로 끄집에 낸다.
      
      // 객체 빈(Bean)에 데이터를 담아서 바인딩하기
      UserDTO userDTO = new UserDTO(1004, name, "의적");
      req.setAttribute("userDTO", userDTO);
      // JSP에서 받아서 사용할때는 캐스팅(형변환)해야 사용할수 있다.
      
      // 사용자 목록을 바인딩하기
      req.setAttribute("list", list);
      
      // 먼저 forward 할 JSP 페이지 준비
      // wepapp 폴더 내부 어디에 만들어도 상관 없다.
      // 그러나 보안상 JSP 뷰 페이지는 WEB-INF/views 에 위치한다.
      // WEB-INF 폴더 내부는 외부에서 직접 접근 불가능. (보안상 퍼미션이 막혀있다)
      String viewName = "/WEB-INF/views/home.jsp";
      RequestDispatcher view = req.getRequestDispatcher(viewName);
      view.forward(req, resp);
   } // end of doGet()

   @Override
   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");
      resp.setContentType("text/html; charset=UTF-8");
      
      System.out.println("POST - /home");
      
      int no = Integer.parseInt(req.getParameter("no"));
      String name = req.getParameter("name");
      String job = req.getParameter("job");
      
      UserDTO dto = new UserDTO(no, name, job);
      System.out.println(dto);
      list.add(dto);
      
      // 목록으로 리다이렉트
      resp.sendRedirect(req.getContextPath()+"/home");
   }
   
   
}