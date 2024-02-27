<%@page import="org.comstudy.myweb.model.TodoDTO"%>
<%@page import="org.comstudy.myweb.model.BoardDTO"%>
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
ArrayList<TodoDTO> list = null;
if(request.getAttribute("list") != null){
	list = (ArrayList<TodoDTO>)request.getAttribute("list");
}
%>
<h1>홈페이지</h1>
<h2>Todo List</h2>
<h2>할 일 등록하기</h2>
<form action="<%= request.getContextPath() %>/todo/list" method="post">
    <label for="no">No:</label>
    <input type="text" id="no" name="no"><br>
    <label for="title">할 일:</label>
    <input type="text" id="title" name="title"><br>
    <input type="submit" value="추가">
</form>


<table border="1" width="100%">
	<tr>
		<th>번호</th><th>할 일</th>
	</tr>
<%
	for(int i=0; i<list.size();i++){
		TodoDTO todo = list.get(i);
		out.println(todo.toString());
	}
%>
</table>
</body>
</html>