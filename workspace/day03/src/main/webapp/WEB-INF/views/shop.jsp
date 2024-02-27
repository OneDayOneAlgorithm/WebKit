<%@page import="org.comstudy.myweb.model.ShopDTO"%>
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
<%
ArrayList<ShopDTO> list = null;
if(request.getAttribute("list") != null){
	list = (ArrayList<ShopDTO>)request.getAttribute("list");
}
%>
<h1>홈페이지</h1>
<h2>중고차 목록</h2>
<h2>중고차 추가하기</h2>
<form action="<%= request.getContextPath() %>/shop/list" method="post">
    <label for="no">No:</label>
    <input type="text" id="no" name="no"><br>
    <label for="name">이름:</label>
    <input type="text" id="name" name="name"><br>
    <label for="cost">가격:</label>
    <input type="text" id="cost" name="cost"><br>
    <input type="submit" value="추가">
</form>


<table border="1" width="100%">
	<tr>
		<th>No</th><th>이름</th><th>가격</th>
	</tr>
<%
	for(int i=0; i<list.size();i++){
		ShopDTO car = list.get(i);
		out.println(car.toString());
	}
%>
</table>
</body>
</html>