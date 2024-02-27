<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>길동 상사</h1>
<%
	String user = "홍길동";
%>

<p>사용자: <%=user %><p>
<% out.println("---> " + request.getServletContext().getRealPath("/")); %>
</body>
</html>