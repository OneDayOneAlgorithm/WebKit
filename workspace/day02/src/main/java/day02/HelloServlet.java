package day02;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      System.out.println("Hello Servlet GET 방식 호출"); // 콘솔출력
      // 한글 인코딩 설정
      resp.setContentType("text/html; charset=UTF-8");
      
      // 화면 출력을 위해 PrintWriter 객체 사용.
      PrintWriter out = resp.getWriter();
      out.println("<html>");
      out.println("  <body>");
      out.println("    <h1>Hello 서블렛</h1>");
      out.println("  </body>");
      out.println("</html>");
      out.close();
   }
}