import { useState, useEffect} from 'react';
import Header from 'header';
import ListBody from 'ListBody';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodo } from './actions/TodoActions';
import '../App.css';

// App method
function Employ() {
  
  const dispatch = useDispatch();
  const employList = useSelector(state => state.employList); // 리덕스 스토어의 todoList 상태를 가져옵니다.
  const loading = useSelector(state => state.employLoading); // 리덕스 스토어의 todoList 상태를 가져옵니다.

  useEffect(() => {
    dispatch(fetchEmploy()); // 앱이 마운트될 때 todo 리스트를 가져옵니다.
  }, []);

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
    <Header/>
    {employList.map((employ)=>(<ListBody key={employ.no} employ={employ}/>))}
    {loading && <ListBody key="loading" employ={{ key: 'loading', name: 'loading...' }} />}
    </div>  
  );
}

export default Employ;