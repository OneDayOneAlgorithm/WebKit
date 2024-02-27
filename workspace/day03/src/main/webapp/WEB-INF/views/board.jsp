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
ArrayList<BoardDTO> list = null;
if(request.getAttribute("list") != null){
	list = (ArrayList<BoardDTO>)request.getAttribute("list");
}
%>
<h1>홈페이지</h1>
<h2>게시글 목록</h2>
<h2>게시글 등록하기</h2>
<form action="<%= request.getContextPath() %>/board/list" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br>
    <label for="title">제목:</label>
    <input type="text" id="title" name="title"><br>
    <label for="content">내용:</label>
    <input type="text" id="content" name="content"><br>
    <input type="submit" value="추가">
</form>


<table border="1" width="100%">
	<tr>
		<th>이름</th><th>제목</th><th>내용</th>
	</tr>
<%
	for(int i=0; i<list.size();i++){
		BoardDTO board = list.get(i);
		out.println(board.toString());
	}
%>
</table>
</body>
</html>