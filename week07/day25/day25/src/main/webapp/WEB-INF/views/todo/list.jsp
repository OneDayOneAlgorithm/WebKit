<%@page import="org.comstudy.myweb.model.TodoDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TodoList</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    h1 {
        color: #333;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #f5f5f5;
    }
    .add-form {
        margin-bottom: 20px;
    }
</style>
</head>
<body>

<h1>TodoList</h1>

<div class="add-form">
    <form action="input" method="POST">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <button type="submit">Add</button>
    </form>
</div>

<table>
    <thead>
        <tr>
            <th>Done</th>
            <th>Title</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    <% ArrayList<TodoDTO> todoList = (ArrayList<TodoDTO>)request.getAttribute("todoList");
    if(todoList != null) {
        for(int i=0; i<todoList.size(); i++) {
            TodoDTO todo = todoList.get(i);
    %>
        <tr>
            <td>
                <form action="update" method="POST">
                    <input type="checkbox" id="done_<%=i%>" name="done_<%=i%>" <%if(todo.isDone()) out.print("checked");%>>
                    <input type="hidden" id="id_<%=i%>" name="id_<%=i%>" value="<%=todo.getNo()%>">

                </form>
            </td>
            <td><%=todo.getTitle() %></td>
            <td>
                <a href="#">Edit</a>
                <a href="/day04/todo/delete?no=<%=todo.getNo() %>">Delete</a>
            </td>
        </tr>
    <% }
    } %>
    </tbody>
</table>

</body>
</html>
