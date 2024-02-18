const { db } = require('./firebase/admin.js');
const cors = require('cors');
const { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } = require("firebase/firestore");
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // JSON 파싱을 위한 미들웨어
app.use(cors())

app.get('/city', async(req,res)=>{
    const citiesRef = db.collection('cities');
    const snapshot = await citiesRef.where('capital', '==', true).get();
    if (snapshot.empty) {
    console.log('No matching documents.');
    return;
}  
    const lst = [];
    snapshot.docs.forEach(doc => {
        lst.push(doc.data())
    });
    res.json(lst);

})  


app.get('/api/todoList', async (req, res) => {
    try{
        const todoListRef = db.collection('todoList');
        const snapshot = await todoListRef.get();
        const todoList = [];
        snapshot.forEach(doc => {
            todoList.push(doc.data());
        });
        res.json(todoList);
    }catch (error) {
        console.error('Error getting documents', error);
        res.status(500).send({error:'Failed to fetch todoList'});
    }
});

app.post('/api/todoList', async (req, res) => {
    try {
        const text = req.body.text;
        const todoListRef = db.collection('todoList');
        const snapshot = await todoListRef.get();
        let maxNo = 0;
        snapshot.forEach(doc => {
            const todo = doc.data();
            if (todo.no > maxNo){
                maxNo = todo.no  
            }
        });
        const newNo = maxNo + 1;
        const newTodo = {no:newNo, text:text};
        await db.collection('todoList').doc(newNo.toString()).set(newTodo);
        res.status(201).send('true');
    }catch(error){
        console.error('Error adding document', error);
        res.status(500).json({error:'Failed to add todo'});
    }
})

app.put('/api/todoList', async (req, res) => {
    try{
        const no = req.body.no;
        const todoListRef = db.collection('todoList');
        const snapshot = await todoListRef.where('no', '==', no).get();
        if (snapshot.empty){
            res.status(404).json(req);
            return;
        }
        await db.collection('todoList').doc(no.toString()).set(req.body);
        res.status(201).send('true');
    }catch(error){
        console.error('Error updating document', error);
        res.status(500).json({error:'Failed to updating todo'});
    }
})

app.delete('/api/todoList/:no', async (req, res) => {
    try{
        const no = req.params.no;
        await db.collection('todoList').doc(no.toString()).delete();
        res.send('true');
    }catch(error){
        console.error('Error deleting document', error);
        res.status(500).json({error:'Failed to deleting todo'});
    }
})

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
