const express = require('express');
const session = require('express-session');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// MongoDB 연결 설정
const dbUrl = "mongodb://localhost";
let vehicleDB = null;

// MongoDB 연결
function connectDb() {
    MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function(err, client) {
        if(err) throw err;

        vehicleDB = client.db('vehicle');
        console.log("DB 접속 성공!");
    });
}

// 세션 설정
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 세션을 통한 로그인 체크 미들웨어
function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        res.redirect('/'); // 로그인 페이지로 리다이렉트
    }
}

// 회원가입
app.post('/signup', (req, res) => {
    console.log('POST - /process/adduser');
    // bodyParser 미들웨어 등록
    if(vehicleDB) {
        let newUser = {
            "id": req.body.id, 
            "password": req.body.password, 
        }
        // req.body의 내용을 vehicle디비의 users에 저장
        let users = vehicleDB.collection('users');
        // 이미 등록된 아이디인지 확인
        users.findOne({ id: newUser.id }, (err, user) => {
            if (err) {
                console.error("Error while finding user:", err);
                res.status(500).end("<h1>Error: Internal Server Error</h1>");
                return;
            }
            // 이미 등록된 아이디인 경우
            if (user) {
                console.log("이미 등록된 id입니다.");
                res.send('<script>alert("이미 등록된 ID입니다."); window.location.href = "/process/signup.html";</script>');
                return;
            }
            // 등록되지 않은 아이디인 경우 회원가입 처리
            users.insertMany([newUser], (err, result) => {
                if (err) {
                    console.error("Error while adding user:", err);
                    res.status(500).end("<h1>Error: Internal Server Error</h1>");
                    return;
                }
                console.dir(result.insertedCount);
                if (result.insertedCount > 0) {
                    console.log('사용자 정보 추가 성공!');
                    // 회원가입 성공 시 채팅방 목록 페이지로 이동
                    res.redirect('/chatrooms');
                } else {
                    res.writeHead(200, { 'Content-Type': "text/html; charset=UTF-8" })
                    res.end("<h1>Error: 회원 추가 실패!</h1>");
                    return;
                }
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': "text/html; charset=UTF-8" })
        res.end("<h1>Error: DB가 없습니다!</h1>");
        return;
    }
});


// 로그인
app.post('/signin', (req, res) => {
    // 사용자가 제출한 아이디와 비밀번호 가져오기
    const { ID, password } = req.body;
    if (vehicleDB) {
        // 데이터베이스에서 해당 아이디와 비밀번호를 가진 사용자 찾기
        vehicleDB.collection('users').findOne({ id:ID, password:password }, (err, user) => {
            if (err) {
                console.error("Error while finding user:", err);
                res.status(500).end("<h1>Error: Internal Server Error</h1>");
                return;
            }
            console.log(user)
            if (!user) {
                console.log("User not found");
                res.send('<script>alert("ID 또는 PW를 다시 확인하십시오."); window.location.href = "/index.html";</script>');
                return;
            }
            // 세션에 사용자 정보 저장
            req.session.userId = req.body.ID;
            // 로그인 성공 시 채팅방 목록 페이지로 이동
            res.redirect('/chatrooms');
        });
    } else {
        res.end("<h1>Error: DB가 없습니다!</h1>");
    }
});

app.get('/signout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('세션 삭제 중 오류 발생:', err);
            res.status(500).end('세션 삭제 중 오류 발생');
        } else {
            console.log('세션 삭제 완료');
            res.redirect('/'); // 로그아웃 후 로그인 페이지로 리다이렉트
        }
    });
});


app.get('/chatrooms', isAuthenticated, (req, res) => {
    console.log(req.session.userId)
    // chatrooms.ejs 템플릿을 렌더링하여 응답
    if (vehicleDB) {
        // 로그인 성공 시 채팅방 목록 페이지로 이동
        vehicleDB.collection('rooms').find().toArray(function(err, chatrooms) {
            if (err) {
                console.error("Error while fetching chatrooms:", err);
                res.status(500).end("<h1>Error: Internal Server Error</h1>");
                return;
            }
            req.app.render('chatrooms', { chatrooms }, (err2, html) => {
                if (err2) {
                    console.error("Error while rendering chatrooms:", err2);
                    res.status(500).end("<h1>Error: Internal Server Error</h1>");
                    return;
                }
                res.end(html);
            });
        });
    } else {
        res.end("<h1>Error: DB가 없습니다!</h1>");
    }
});

// 채팅방 정보를 제공하는 엔드포인트
app.get('/chatroom/:name', isAuthenticated, (req, res) => {
    const chatroomName = req.params.name;
    // 해당 채팅방에 대한 정보를 데이터베이스에서 가져옴
    // 이후 해당 정보를 클라이언트에 응답함
    // 이 부분은 데이터베이스에 따라 구현 방식이 달라질 수 있음
    if (vehicleDB) {
        const userId = req.session.userId;
        // 로그인 성공 시 채팅방 목록 페이지로 이동
        vehicleDB.collection('rooms').findOneAndUpdate(
            { name: chatroomName },
            { $addToSet: { people: userId } }, // $addToSet을 사용하여 중복 추가 방지
            { returnOriginal: false }, // 업데이트된 문서를 반환하도록 설정
            (err, updatedChatroom) => {
                if (err) {
                    console.error("Error while updating chatroom:", err);
                    res.status(500).end("<h1>Error: Internal Server Error</h1>");
                    return;
                }
                // 채팅방 정보를 클라이언트에게 응답
                req.app.render('chatroom', { chatroomInfo: updatedChatroom.value, userId:userId }, (err2, html) => {
                    if (err2) {
                        console.error("Error while rendering chatrooms:", err2);
                        res.status(500).end("<h1>Error: Internal Server Error</h1>");
                        return;
                    }
                    res.end(html);
                });
            }
        );
    } else {
        res.end("<h1>Error: DB가 없습니다!</h1>");
    }
});

app.get('/chatroom/out/:name', isAuthenticated, (req, res) => {
    const chatroomName = req.params.name;
    if (vehicleDB) {
        const userId = req.session.userId;
        // 로그인 성공 시 채팅방 목록 페이지로 이동
        vehicleDB.collection('rooms').findOneAndUpdate(
            { name: chatroomName },
            { $pull: { people: userId } }, // $pull을 사용하여 userId를 people 배열에서 제거
            { returnOriginal: false }, // 업데이트된 문서를 반환하도록 설정
            (err, updatedChatroom) => {
                if (err) {
                    console.error("Error while updating chatroom:", err);
                    res.status(500).end("<h1>Error: Internal Server Error</h1>");
                    return;
                }
                res.redirect('/chatrooms');
            }
        );
    } else {
        res.end("<h1>Error: DB가 없습니다!</h1>");
    }
});

    



// 채팅방 만들기
app.post('/createRoom', isAuthenticated, (req, res) => {
    // 클라이언트에서 전송된 채팅방 이름 가져오기
    const roomName = req.body.roomName;
    const userId = req.session.userId; // 현재 사용자의 userId

    if (vehicleDB) {
        // 중복된 채팅방 이름이 있는지 확인
        vehicleDB.collection('rooms').findOne({ name: roomName }, (err, existingRoom) => {
            if (err) {
                console.error("Error while checking existing room:", err);
                res.status(500).send("채팅방 생성 중 오류가 발생했습니다.");
                return;
            }
            if (existingRoom) {
                // 이미 같은 이름의 채팅방이 존재하는 경우
                console.log("채팅방 이름이 이미 존재합니다.");
                res.send("이미 같은 이름의 채팅방이 존재합니다.");
                return;
            }

            // 새로운 채팅방 추가
            vehicleDB.collection('rooms').insertOne({ name: roomName, people: [userId] }, (err, result) => {
                if (err) {
                    console.error("Error while creating room:", err);
                    res.status(500).send("채팅방 생성 중 오류가 발생했습니다.");
                    return;
                }
                console.log(roomName);
                // 채팅방 생성 후 해당 채팅방으로 리다이렉트
                res.redirect('/chatroom/' + roomName);
            });
        });
    } else {
        res.status(500).send("DB가 없습니다!");
    }
});




// 서버 시작
const port = 3000;
server.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
    connectDb();
});


io.sockets.on('connection', function(socket){
	console.log('클라이언트 소켓 접속 성공!');

    // 데이터베이스에서 모든 방의 방제목을 가져와서 각각의 방에 대해 'message' 이벤트를 발생시키는 코드
    if (vehicleDB) {
        vehicleDB.collection('rooms').find().toArray((err, rooms) => {
            if (err) {
                console.error("Error while fetching rooms:", err);
                return;
            }
            // 각 방에 대해 소켓 이벤트 리스너를 등록
            rooms.forEach(room => {
                const roomName = room.name;
                console.log(roomName);
                // 각 방에 대한 소켓 이벤트 리스너를 등록
                socket.on(roomName, function(data) {
                    console.log("=====================");
                    io.sockets.emit(roomName, data);
                });
            });
        });
    } else {
        console.error("Error: DB가 없습니다!");
    }

    socket.on('disconnect', function() {
        console.log('클라이언트 접속 해제 됨!');
        io.sockets.emit('user disconnected');
    });

    
});