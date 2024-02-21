const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.set('port', 5000);
app.use(cors());

const calcUrl = "/calc/:a/:b";
let a = 0;
let b = 0;

app.use(calcUrl, (req,res,next)=>{
    console.log('미들웨어 호출')
    a = Number(req.params.a);
    b = Number(req.params.b);
    next();
})

router.route(calcUrl).get((req,res)=>{
    res.send({result: a + b, method:'get', data: new Date()});
});
router.route(calcUrl).delete((req,res)=>{
    let resultData = {
        result: a-b,
        method:'delete',
        data: new Date()
    }
    res.send(resultData);
});
router.route(calcUrl).post((req,res)=>{
    let resultData = {
        result: a*b,
        method:'post',
        data: new Date()
    }
    res.send(resultData);
});
router.route(calcUrl).put((req,res)=>{
    let resultData = {
        result: a/b,
        method:'put',
        data: new Date()
    }
    res.send(resultData);
});

app.use(router);

const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('서버 실행 중 ... https://localhost:'+app.get('port'));
})