import { useState, useEffect} from 'react';
import './App.css';
import Header from './header';
import ListBody from './ListBody';
import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } from "firebase/firestore"; 

// App method
function App() {
  const [todoList,setTodoList] = useState([]);
  const [cnt,setCnt] = useState(0);

  // todo.no increment
  for(let i=0; i<todoList.length; i++){
    if (cnt < todoList[i].no){
      setCnt(todoList[i].no)
    }
  }

  // DB에서 todoList 조회 후 반환하는 메서드
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todoList"));
      const newTodos = querySnapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()
      }));
      // todo.no 오름차순 정렬
      newTodos.sort((a, b) => a.no - b.no);        
      return newTodos;
    } catch (e) {
      console.error("Error fetching documents: ", e);
      return;
    }
  };

  // 최초 마운트될 때 todoList초기화
  useEffect(() => {(async () => {setTodoList(await fetchData())})()}, []);   

  // todo add button
  const btnHandler = async function(newTodo) {
    try {
      await addDoc(collection(db, "todoList"), {
        no: cnt+1,
        text: newTodo.text,
        done: newTodo.done
      });
      setTodoList(await fetchData());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // todo delete button
  const todoDelete = async function(todoId) {
    try{
      await deleteDoc(doc(db, "todoList", todoId));
      setTodoList(await fetchData());
    }catch(e){
      console.error("Error deleting document: ", e);
    }
  };

  // todo check button
  const todoCheck = async function(todoId,status){
    try{
      await updateDoc(doc(db,'todoList',todoId),{
        done : status
      })
      setTodoList(await fetchData());
    }catch(e){console.error(e);}}
  
  // text box auto edit  
  const textEdit = async function(todoId,text){
    try{
      await updateDoc(doc(db, 'todoList', todoId),{
        text : text
      })
      setTodoList(await fetchData())
    }catch(e){console.log(e)}
  }

  
  // app method return
  return (
    <div className="App">
      <Header btnHandler={btnHandler}></Header>
      {todoList.map((todo)=>(<ListBody key={todo.no} todo={todo} todoDelete={todoDelete} todoCheck={todoCheck} textEdit={textEdit}></ListBody>))}
    </div>
  );
}

export default App;