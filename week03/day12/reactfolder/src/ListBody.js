import React, {useState, useEffect} from 'react';
function ListBody(props){
  const [editedTodo, setEditedTodo] = useState(props.todo.text);
  const [isChecked, setIsChecked] = useState(props.todo.done);
  const handleCheckboxChange = () => {props.todoCheck(props.todo.id,!isChecked)};
  const handleDelete = () => {props.todoDelete(props.todo.id);};
  const handleText = (e) => {
    setEditedTodo(e.target.value)
    console.log(editedTodo)
    props.textEdit(props.textEdit(props.todo.id,editedTodo))}

  useEffect(() => {
    // props.todo.done 값이 변경될 때마다 setIsChecked를 업데이트
    setIsChecked(props.todo.done);
  }, [props.todo.done]);


  // ListBody return
  return (<div>
    <div>
      <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
      <input type="text" value={editedTodo} onChange={handleText} style={{textDecoration: isChecked ? 'line-through' : 'none'}}/>
      <button onClick = {handleDelete}>Delete</button>
    </div>
    <hr/>
  </div>);
}
// export로 등록한 컴포넌트를 사용 할 때는 import 해준다.
export default ListBody;