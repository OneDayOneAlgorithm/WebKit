<%@page import="org.comstudy.myweb.model.CarDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상세 보기</title>
</head>
<body>
<%!
// 선언부
// 클래스의 멤버 필드, 멤버 메서드를 선언하는 부분
// 함수 선언 가능
private int count = 0;
public int getCount() {
	return count;
}
%>
<h1>상세 보기</h1>
<%
CarDTO car = null;
if(request.getAttribute("car") != null) {
	car = (CarDTO)request.getAttribute("car");
%>
<table border="1">
	<tr>
		<th>No</th><td><%= car.getNo() %></td>
	</tr>
	<tr>
		<th>Name</th><td><%= car.getName() %></td>
	</tr>
	<tr>
		<th>Company</th><td><%= car.getCompany() %></td>
	</tr>
	<tr>
		<th>Price</th><td><%= car.getPrice() %> 만원</td>
	</tr>
	<tr>
		<th>Year</th><td><%= car.getYear() %> 년식</td>
	</tr>
</table>
<%
} // end of if

// 함수 내부이기 때문에 다른 함수 선언 불가능.
// 스크립트릿 _service() 메소드의 내용이 된다.
String no = request.getParameter("no");
%>
<a href="modify?no=<%=no %>">수정</a>
<a href="delete?no=<%=no %>">삭제</a>
<a href="list">목록</a>

</body>
</html>