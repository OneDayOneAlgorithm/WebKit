import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editEmploy, deleteEmploy, checkEmploy, editDocument, editLevel } from '../actions/TodoActions';

function ListBody(props){
  const dispatch = useDispatch();
  const [editedEmploy, setEditedEmploy] = useState(props.employ.name);
  const [editedDocument, setEditedDocument] = useState(props.employ.department);
  const [editedLevel, setEditedLevel] = useState(props.employ.rank);
  const [isChecked, setIsChecked] = useState(props.employ.check);
  const [isEditing, setIsEditing] = useState(false); // 추가된 상태


  const handleCheckboxChange = (e) => {dispatch(checkEmploy(props.employ.id, !isChecked));};
  const handleDelete = () => {
    dispatch(deleteEmploy(props.employ.id));};
  const handleText = (e) => {
    setEditedEmploy(e.target.value)
  }
  const handleDoc = (e) => {
    setEditedDocument(e.target.value)
  }
  const handleLevel = (e) => {
    setEditedLevel(e.target.value)
  }

  const handleEdit = () => {
    dispatch(editEmploy(props.employ.id, {editedEmploy,editedDocument,editedLevel}));
    alert('수정되었습니다.')
  }




  useEffect(() => {
    // props.todo.done 값이 변경될 때마다 setIsChecked를 업데이트
    setIsChecked(props.employ.check);
  }, [props.employ.check]);

 

  // ListBody return
  return (<div>
    <div className="row px-3 align-items-center todo-item rounded">

    <div className="col px-1 m-1 d-flex align-items-center">

<input

  value={props.employ.no}
  onChange={handleText}
  readOnly={true}
  type="text"
  className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
/>
    </div>


                <div className="col px-1 m-1 d-flex align-items-center">

            <input

              value={editedEmploy}
              onChange={handleText}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
                </div>


                <div className="col px-1 m-1 d-flex align-items-center">
            <input

              value={editedDocument}
              onChange={handleDoc}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
            </div>



                <div className="col px-1 m-1 d-flex align-items-center">

            <input

              value={editedLevel}
              onChange={handleLevel}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
          
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