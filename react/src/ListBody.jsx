import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, deleteTodo, checkTodo } from './actions/TodoActions';

function ListBody(props){
  const dispatch = useDispatch();
  const [editedTodo, setEditedTodo] = useState(props.todo.text);
  const [isChecked, setIsChecked] = useState(props.todo.done);
  const [isEditing, setIsEditing] = useState(false); // 추가된 상태


  const handleCheckboxChange = (e) => {dispatch(checkTodo(props.todo.id, !isChecked));};
  const handleDelete = () => {dispatch(deleteTodo(props.todo.id));};
  const handleText = (e) => {
    setEditedTodo(e.target.value)
  }
  const handleEdit = () => {
    setIsEditing(!isEditing);
  }

  useEffect(() => {
    dispatch(editTodo(props.todo.id, editedTodo));
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
                {isEditing ? ( // 편집 모드인 경우
            <input
              style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
              value={editedTodo}
              onChange={handleText}
              onBlur={handleEdit} // input 상자에서 포커스가 벗어나면 편집 모드 종료
              autoFocus // 자동으로 포커스
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
          ) : ( // 편집 모드가 아닌 경우
            <div
              style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            >
              {editedTodo}
            </div>
          )}
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                    <h5 className="m-0 p-0 px-4">
                            <i onClick = {handleEdit} className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
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