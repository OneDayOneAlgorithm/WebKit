const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// cors 미들웨어 불러오기
const cors = require('cors');
//  app의 미들웨어로 cors 객체 사용
app.use(cors());

// 외부에서 전달한 요청 파라미터 값 사용.
// POST : 클라이언트 페이지에서 입력 폼으로 전송 하는 방식
// GET : URL 뒤에 쿼리스트링 형식으로 전송하는 방식 (?name=HONG&age=18)
// REST Api 방식: GET, POST, PUT, DELETE 등 8가지 매서드를 사용 가능.(Ajax로 가능)
// 단, HTML 입력 <form>으로는 GET과 POST 두가지만 허용 된다.
// RESTApi는 Method만 다르게 하면 동일한 URL로 처리가 가능하다.
// Post man 도구를 이용해서 테스트 가능.

app.get("/", function(req, res) {
    res.end("<h1>Hello world</h1>");
});

// http://localhost:3000/data?user=HONG&message=HELLO
app.get('/data', function(req, res) {
    let user = req.query.user;
    let message = req.query.message;
    // JSON문자열로 화면에 보여준다.
    //res.end(`{"user":"${user}", "message":"${message}"}`);
    let dataObj = {user, message};  
    console.log(dataObj); // { user: 'HONG', message: 'HELLO' }
    res.end(JSON.stringify(dataObj) );  // 객체를 JSON문자열로 변환

    //res.send(dataObj); // 수식이나 객체를 바로 브라우저 화면(body)에 출력
    //res.send(req.query);
});

const server = http.createServer(app);
server.listen(port, function(e) {
    console.log("서버 실행 성공!");
});