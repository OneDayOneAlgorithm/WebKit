const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const server = http.createServer(app);
server.listen(port, function(e){
    console.log('서버 실행 성공 : http://localhost:' + port)
})