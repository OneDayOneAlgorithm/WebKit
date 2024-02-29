<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>중고차 새로 등록</h1>
<form action="input" method="POST">
	<table border="1">
		<tr>
			<th>No</th>
			<td>
				<input type="text" value="1005" name="no" />
				<button onClick="">중복확인</button>
			</td>
		</tr>
		<tr>
			<th>Name</th>
			<td><input type="text" value="벤츠" name="name" /></td>
		</tr>
		<tr>
			<th>Company</th>
			<td><input type="text" value="메스세데스" name="company" /></td>
		</tr>
		<tr>
			<th>Price</th>
			<td><input type="text" value="6000" name="price" /> 만원</td>
		</tr>
		<tr>
			<th>Year</th>
			<td><input type="text" value="2023" name="year" /> 년식</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="submit" value="전송" />
			</td>
		</tr>
	</table>
</form>
<a href="list">목록</a>

</body>
</html>