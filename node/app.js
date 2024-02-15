const { db } = require('./firebase');
const { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } = require("firebase/firestore");
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // JSON 파싱을 위한 미들웨어

// 게시물 목록을 반환하는 엔드포인트 (GET)
app.get('/todoList', async (req, res) => {
    try{
        const todoListRef = collection(db, 'todoList');
        const snapshot = await getDocs(todoListRef);
        const todoList = [];
        snapshot.forEach(doc => {
            todoList.push(doc.data());
        });
        res.json(todoList);
    }catch (error) {
        console.error('Error getting documents', error);
        res.status(500).json({error:'Failed to fetch todoList'});
    }
});

app.post('/todoList', async (req, res) => {
    try {
        const {text} = req.body;
        const todoListRef = collection(db,'todoList');
        const snapshot = await getDocs(todoListRef);
        let maxNo = 0;
        snapshot.forEach(doc => {
            const todo = doc.data();
            if (todo.no > maxNo){
                maxNo = todo.no
            }
        });
        const newNo = maxNo + 1;
        const newTodoRef = await addDoc(collection(db, 'todoList'), {no:newNo,text})
        const newTodo = {no:newNo, text};
        res.status(201).json(newTodo);
    }catch(error){
        console.error('Error adding document', error);
        res.status(500).json({error:'Failed to add todo'});
    }
})

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
