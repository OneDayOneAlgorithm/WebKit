<%@page import="org.comstudy.myweb.model.CarDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>중고차 정보 수정</h1>
<form action="modify" method="POST">
<%
CarDTO car = null;
if(request.getAttribute("car") != null) {
	car = (CarDTO)request.getAttribute("car");
%>
	<table border="1">
		<tr>
			<th>No</th>
			<td>
				<input type="hidden" value="<%= car.getNo() %>" name="no" />
				<%= car.getNo() %>
			</td>
		</tr>
		<tr>
			<th>Name</th>
			<td><input type="text" value="<%= car.getName() %>" name="name" /></td>
		</tr>
		<tr>
			<th>Company</th>
			<td><input type="text" value="<%= car.getCompany() %>" name="company" /></td>
		</tr>
		<tr>
			<th>Price</th>
			<td><input type="text" value="<%= car.getPrice() %>" name="price" /> 만원</td>
		</tr>
		<tr>
			<th>Year</th>
			<td><input type="text" value="<%= car.getYear() %>" name="year" /> 년식</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="submit" value="전송" />
			</td>
		</tr>
	</table>
</form>
<%
} // end of if

String no = request.getParameter("no");
%>
<a href="detail?no=<%=no %>">상세페이지</a>
<a href="delete?no=<%=no %>">삭제</a>
<a href="list">목록</a>

</body>
</html>