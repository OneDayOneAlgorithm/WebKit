import {db} from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } from "firebase/firestore"; 

export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

// TodoList 최신화
export const fetchTodo = () => {
    return async dispatch => {
        try {
            
            const querySnapshot = await getDocs(collection(db, "todoList"));
            const todoList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            todoList.sort((a, b) => a.no - b.no); 
            dispatch(fetchTodoSuccess(todoList));
        } catch (error) {
            dispatch(fetchTodoFailure(error));
        }
    };
};

export const startLoading = () => ({
    type : START_LOADING
})

export const stopLoading = () => ({
    type : STOP_LOADING
})

export const fetchTodoSuccess = todoList => ({
    type: FETCH_TODO_SUCCESS,
    payload: todoList
});

export const fetchTodoFailure = error => ({
    type: FETCH_TODO_FAILURE,
    payload: error
});

export const addTodo = (newTodo) => {
    return async dispatch => {
        try {
            dispatch(startLoading());
            await addDoc(collection(db, "todoList"), {
                no: newTodo.no,
                text: newTodo.text,
                done: newTodo.done
            });
            dispatch(fetchTodo());
        } catch (error) {
            console.error("Error adding todo: ", error);
        }                                          
    };
};

export const deleteTodo = (todoId) => {
    return async dispatch => {
        try {
            await deleteDoc(doc(db, "todoList", todoId));
            dispatch(fetchTodo());
        } catch(e) {
            console.error("Error deleting document: ", e);
        }
    };
};

export const checkTodo = (todoId, status) => {
    return async dispatch => {
        try{
            await updateDoc(doc(db,'todoList',todoId),{
            done : status
            })
            dispatch(fetchTodo());
        }catch(e){console.error(e);}}
};

export const editTodo = (todoId, text) => {
    return async dispatch => {
        try{
            if(text=='loading...'){
                return
            }
                await updateDoc(doc(db, 'todoList', todoId),{
                    text : text
                })
            dispatch(fetchTodo());
        }catch(e){console.log(e)}
    }
};