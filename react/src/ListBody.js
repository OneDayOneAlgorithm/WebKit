import React, {useState} from 'react';
function ListBody(props){
  const [editedTodo, setEditedTodo] = useState(props.todo.text);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {setIsChecked(!isChecked);};
  const handleDelete = () => {
    props.todoDelete(props.todo.id);
  };
    return (<div>
      <div>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
        <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} style={{textDecoration: isChecked ? 'line-through' : 'none'}}/>
        <button onClick = {handleDelete}>Delete</button>
      </div>
      <hr/>
    </div>);
  }
// export로 등록한 컴포넌트를 사용 할 때는 import 해준다.
export default ListBody;