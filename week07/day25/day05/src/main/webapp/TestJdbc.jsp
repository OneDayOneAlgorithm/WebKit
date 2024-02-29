<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.comstudy.myweb.model.CarDAO"%>
<%@page import="org.comstudy.myweb.dbcp.JdbcUtil"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
// 스크립트 릿
// JSP에서 작동하는 것은 Servlet에서도 작동한다.
// JSP가 곧 Servlet이다.
Connection conn = JdbcUtil.getConnection();
//out.println(conn);

CarDAO carDao = new CarDAO();
List list  = carDao.selectAll();
out.println(list);
%>
<hr/>
<%=conn %>

</body>
</html>