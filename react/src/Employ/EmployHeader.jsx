import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmploy } from '../actions/TodoActions';
// App에서 사용 할 새 컴포넌트 선언
// input에 내용을 입력하고 버튼을 클릭하면
// 입력 된 내용으로 appTitle이 변경 되도록 하라.
function Header() {
    const [newEmploy, setNewEmploy] = useState("");
    const [newDoc, setNewDoc] = useState("");
    const [newLevel, setNewLevel] = useState("");
    const dispatch = useDispatch();
    const employList = useSelector(state => state.employList);
    const [cnt,setCnt] = useState(0);

    for(let i=0; i<employList.length; i++){
      if (cnt < employList[i].no){
        setCnt(employList[i].no)
      }
    }
    
    const btnHandler = () => {
      if(!newEmploy || !newDoc || !newLevel){
        alert('다시 확인해 주세요.')
        return
      }
      dispatch(addEmploy({
        no: cnt + 1,
        name: newEmploy,
        department: newDoc,
        rank: newLevel,
        check: false
      }));
      setNewEmploy('');
      setNewDoc('');
      setNewLevel('');
    };

    // Header return
    return (<header>
          <div className="row m-1 p-4">
            <div className="col">
                <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <u>직원 관리 프로그램</u>
                </div>
            </div>
        </div>
          <div className="row m-1 p-3">


        <div className="col col-6 mx-auto mb-3">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">

                <div className="col">
                    <input onChange={(e)=>{setNewEmploy(e.target.value)}}  value={newEmploy} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="이름"/>
                </div>
            </div>
        </div>
        <div className="col col-6 mx-auto"></div>


        <div className="col col-6 mx-auto mb-3">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">

                <div className="col">
                    <input onChange={(e)=>{setNewDoc(e.target.value)}}  value={newDoc} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="부서"/>
                </div>



            </div>
        </div>
        <div className="col col-6 mx-auto"></div>
        <div className="col col-6 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">

                <div className="col">
                    <input onChange={(e)=>{setNewLevel(e.target.value)}}  value={newLevel} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="직책"/>
                </div>



            </div>
        </div>
        <div className="col col-6 mx-auto"></div>
        
    </div>

    <div className="col-auto px-0 mx-4 mr-2">
                    <button onClick={btnHandler} type="button" className="btn btn-primary">새 사원 추가</button>
                </div>
    <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    <hr />
    <div className="row px-3 align-items-center todo-item rounded">

    <div className="col px-1 m-1 d-flex align-items-center">

<input

  value='번호'
  readOnly={true}
  type="text"
  className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
/>
    </div>


                <div className="col px-1 m-1 d-flex align-items-center">

            <input

              value='사원명'
              readOnly={true}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
                </div>


                <div className="col px-1 m-1 d-flex align-items-center">
            <input

              value='부서'
              readOnly={true}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
            </div>



                <div className="col px-1 m-1 d-flex align-items-center">

            <input

              value='직급'
              readOnly={true}
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            />
          
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end ml-4">
                    <h5 className="m-0 p-0 px-4">

                        </h5>
                        <h5 className="m-0 p-0 px-4">

                        </h5>
                    </div>
                </div>
            </div>
    </header>);
  }

export default Header;