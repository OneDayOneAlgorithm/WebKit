import { useState } from 'react';
import { List, Paper } from '@mui/material';
import "./App.css";
import AddTodo from './AddTodo';
import Todo from './Todo';

function App() {
    const [itmes, setItems] = useState([
        {id: "0", title:"Hello world", done: true},
        {id: "1", title:"Hello world2", done: false},
        {id: "2", title:"Hello world3", done: false},
        {id: "3", title:"Hello world4", done: true}
    ]);

    let todoItems = itmes.map((item)=>{
        return <Todo item={item} key={item.id} />
    });

    return (<Paper className='App'>
        <h1>Todo List</h1>
            <AddTodo/>
            <List>{todoItems}</List>
    </Paper>);
}

export default App;