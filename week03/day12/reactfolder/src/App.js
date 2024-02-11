import { useState, useEffect} from 'react';
import './App.css';
import Header from './header';
import ListBody from './ListBody';
import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

function App() {
  const [todoList,setTodoList] = useState([]);
  const [cnt,setCnt] = useState(0);
  for(let i=0; i<todoList.length; i++){
    if (cnt < todoList[i].id){
      setCnt(todoList[i].id)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "todo"));
        const newTodos = querySnapshot.docs.map((doc) => ({
          ...doc.data()
        }));
        setTodoList(newTodos);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      }
    };
    fetchData();
  }, []);  // 최초 마운트될 때 한번만 실행

  // Write
  const btnHandler = async function(newTodo) {
    try {
      const docRef = addDoc(collection(db, "todo"), {
        id: newTodo.id,
        text: newTodo.text,
        done: newTodo.done
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTodoList([...todoList,newTodo]);
  }
  const todoDelete = function(deletedId) {
    setTodoList(todoList.filter((todo) => todo.id !== deletedId));
  };
  return (
    <div className="App">
      <Header btnHandler={btnHandler} cnt={cnt}></Header>
      {todoList.map((todo)=>(<ListBody key={todo.id} todo={todo} todoDelete={todoDelete}></ListBody>))}    
    </div>
  );
}

export default App;