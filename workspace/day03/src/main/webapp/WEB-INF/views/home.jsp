<%@page import="java.util.ArrayList"%>
<%@page import="org.comstudy.myweb.model.UserDTO"%>
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
UserDTO userDTO = null;
if(request.getAttribute("userDTO") != null){
	// setAttribute()는 모든 객체가 Object로 변한다.
	// 다시 끄집어 내서 사용하려면 형변환이 필요하다.
	userDTO = (UserDTO)request.getAttribute("userDTO");
}

ArrayList<UserDTO> list = null;
if(request.getAttribute("list") != null){
	list = (ArrayList<UserDTO>)request.getAttribute("list");
}
%>
<h1>홈페이지</h1>
<h2>개발자 약력</h2>
<h2>새로운 개발자 약력 추가하기</h2>
<form action="<%= request.getContextPath() %>/home" method="post">
    <label for="no">No:</label>
    <input type="text" id="no" name="no"><br>
    <label for="name">성명:</label>
    <input type="text" id="name" name="name"><br>
    <label for="job">직업:</label>
    <input type="text" id="job" name="job"><br>
    <input type="submit" value="추가">
</form>


<table border="1" width="100%">
	<tr>
		<th>No</th><th>성명</th><th>직업</th>
	</tr>
<%
	for(int i=0; i<list.size();i++){
		UserDTO user = list.get(i);
		out.println(user.toString());
	}
%>
</table>
</body>
</html>