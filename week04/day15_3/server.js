// server.js
const express = require('express');
const app = express();
const http = require('http');
const port = 3000;

app.get("/", function(req,res){
    console.log("/요청 들어 옴");
    res.end('Hello world');
})

app.get('/home', function(req,res){
    console.log("서버에 '/home' 요청 들어 옴")
    res.end('Home page')
})

const server = http.createServer(app);
server.listen(port, function(){
    console.log('서버 실행 중 : http://localhost:' + port)
});