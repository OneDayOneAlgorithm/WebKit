const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
// express 서버 컴퓨터에서 실행 됨.
// console은 서버의 터미널에 보이는 console 
// Node.js는 빽엔드 기술입니다.
// path경로에 대한 처리 메서드를 app객체에 설정한다.
// 콜백함수에는 request, response 처리를 할 수 있는 매개 변수가 선언 됨.
app.get("/", function(req, res) {
    console.log("서버에 '/' 요청 들어 옴"); // 서버의 console에 보여지는 내용
    res.end('Hello world') // 브라우저에 보여지는 내용(응답)
});
app.get("/home", function(req, res) {
    console.log("서버에 '/home' 요청 들어 옴");
    res.end('Home page');
})
const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 : http://localhost:" + port);
});
// 실행 방법
// 서브의 터미널에서 
// node server.js
// 또는 nodemon 모듈을 이용해서 실행.(서버의 내용 수정 후 자동 재실행 됨)
// node server.js로 실행 하면 server의 내용 수정 후 재실행 해야 함.
// 서버 종료: Ctrl + C (^C)