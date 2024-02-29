<%@page import="org.comstudy.myweb.model.CarDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>중고 자동차 목록</h1>
<table width="100%" border="1">
	<tr>
		<th>No</th>
		<th>Name</th>
		<th>Company</th>
		<th>Price</th>
		<th>Year</th>
	</tr>
<%
ArrayList<CarDTO> carList = (ArrayList<CarDTO>)request.getAttribute("carList");
if(carList != null) {
	for(int i=0; i<carList.size(); i++) {
		CarDTO car = carList.get(i);
	%>
	<tr>
		<td><%=car.getNo() %></td>
		<td><a href="detail?no=<%=car.getNo() %>"><%=car.getName() %></a></td>
		<td><%=car.getCompany() %></td>
		<td><%=car.getPrice() %></td>
		<td><%=car.getYear() %></td>
	</tr>
	<%
	}
}
%>
</table>
<a href="input">데이터등록</a>

</body>
</html>