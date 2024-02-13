import React, {useState, useEffect} from 'react';
function ListBody(props){
  const [editedTodo, setEditedTodo] = useState(props.todo.text);
  const [isChecked, setIsChecked] = useState(props.todo.done);
  const handleCheckboxChange = (e) => {props.todoCheck(props.todo.id,!isChecked)};
  const handleDelete = () => {props.todoDelete(props.todo.id);};
  const handleText = (e) => {
    setEditedTodo(e.target.value)
  }

  useEffect(() => {
    props.textEdit(props.todo.id,editedTodo)
  }, [editedTodo]);

  useEffect(() => {
    // props.todo.done 값이 변경될 때마다 setIsChecked를 업데이트
    setIsChecked(props.todo.done);
  }, [props.todo.done]);

  
  // ListBody return
  return (<div>
    <div className="row px-3 align-items-center todo-item rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i onClick={handleCheckboxChange} className={isChecked ? "fa fa-check-square-o text-primary btn m-0 p-0": "fa fa-square-o text-primary btn m-0 p-0"} data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                    </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                    <input style={{textDecoration: isChecked ? 'line-through' : 'none'}} value={editedTodo} onChange={handleText} type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" />
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-4">
                            <i onClick = {handleDelete} className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
                    </div>
                </div>
            </div>
  </div>);
}
// export로 등록한 컴포넌트를 사용 할 때는 import 해준다.
export default ListBody;