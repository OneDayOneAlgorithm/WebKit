import db from './firebase';
import {collection, getDocs, setDoc, doc, addDoc} from 'firebase/firestore';
import {useState} from 'react';

const App = () => {
  
  const onClickHandler = async () =>{
    try {
      await addDoc(collection(db, "todoList"), {
        text: '헬로',
      });
      setTodoList(await fetchData());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getTodoList(db){
    const todoListCol = collection(db, 'todoList');
    const todoListSnapshot = await getDocs(todoListCol);
    const todoList = todoListSnapshot.docs.map(doc => {
      const data = doc.data()
      data.id = doc.id;
      return data
    });
    return todoList;
  }
  const [todoList,setTodoList] = useState([]);
  getTodoList(db).then((result)=>{
    setTodoList(result);
  })
  return(<>
    <h1>Todo List</h1>
    <ul>
      {todoList.map((item,i)=><li key={i}>{item.text}</li>)}
    </ul>
    <button onClick={onClickHandler}>투두리스트 추가</button>
  </>)
}

export default App;
