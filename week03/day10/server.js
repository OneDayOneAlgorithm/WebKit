const http = require('http');
const express = require('express');
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
    {no:1002, title: '집안 정리하고 밥하기', done: false},
    {no:1003, title: '친구랑 Javascript공부', done: false},
    {no:1004, title: '미니 프로젝트 설날에 만들기', done: false}
];
let noCnt = 1005;

app.get("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end("<h1>TodoList 연습</h1>");
});

// SELECT 기능: TodoList의 목록을 JSON으로 전송한다.
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
    let newTodo = {
        no:Number(req.body.no),
        title:req.body.title, 
        done:Boolean(req.body.done)};
    let index = todoList.findIndex(function(item) {
        return item.no == newTodo.no;
    });
    todoList[index] = newTodo;
    console.log("PUT - /todo 요청");
    res.send(todoList);
});

// DELTE 기능: TodoList에서 항목 삭제
app.delete("/todo", function(req, res) {
    console.log("DELETE - /todo 요청");
    let index = todoList.findIndex(function(item) {
        return item.no == req.body.no;
    });
    todoList.splice(index, 1);
    res.send(todoList);
});

const server = http.createServer(app);
server.listen(port, function(e) {
    console.log("서버 실행 성공 : http://localhost:" + port);
});