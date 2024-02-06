const http = require('http');
const express = require('express');
// express: Node.js로 서버를 쉽게 구현 하도록 하는 프레임워크
// express와 파이썬 Flask는 루비의 시나트라를 본따서 만든 구조. 형식이 유사함.
const app = express(); 
const port = 3000;
const cors = require('cors');

app.use(cors());
// req.body의 내용을 읽기 위해 bodyParser 미들웨어 추가
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

// TodoList의 목록
let todoList = [
    {no:1001, title: '공부하고 탁구 연습', done: false},
    {no:1002, title: '집안 정리하고 밥하기', done: true},
    {no:1003, title: '친구랑 Javascript공부', done: false},
    {no:1004, title: '미니 프로젝트 설날에 만들기', done: false}
];
let noCnt = 1005;

app.get("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end("<h1>TodoList 연습</h1>");
});

// SELECT 기능: TodoList의 목록을 JSON으로 전송한다.
// 클라이언트에서 요청하는 메서드가
// get, post, put, delete 요청에 따라 
// app.get(), app.post(), app.put(), app.delete()가 자동 실행.
app.get("/todo", function(req, res) {
    console.log("GET - /todo 요청")
    res.send(todoList); // {noCnt:noCnt, todoList:todoList} 로 변경 됨.
});

// POST 기능: TodoList에 새 데이터 입력
app.post("/todo", function(req, res) {
    console.log(req.body);
    console.log("POST - /todo 요청");
    todoList.push({no:noCnt++,title:req.body.title, done:false});
    res.send(todoList);
});

// PUT 기능: TodoList에서 항목 내용 수정
app.put("/todo", function(req, res) {
    console.log(req.body.done);
    let newTodo = {
        no:Number(req.body.no),
        title:req.body.title, 
        done: JSON.parse(req.body.done)};
    console.log(newTodo);
    let index = todoList.findIndex(function(item) {
        return item.no == newTodo.no;
    });
    if(index !== -1) {
        todoList[index] = newTodo;
    }
    console.log("PUT - /todo 요청");
    res.send(todoList);
});

// DELTE 기능: TodoList에서 항목 삭제
app.delete("/todo", function(req, res) {
    console.log("DELETE - /todo 요청", req.body.no);
    let index = todoList.findIndex(function(item) {
        console.log("item.no ==", item.no);
        return item.no === Number(req.body.no);
    });
    console.log("index:", index);
    if(index !== -1) {
        todoList.splice(index, 1);
    }
    res.send(todoList);
});

const server = http.createServer(app);
server.listen(port, function(e) {
    console.log("서버 실행 성공 : http://localhost:" + port);
});