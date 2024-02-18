import { FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, START_LOADING, STOP_LOADING } from '../actions/TodoActions';

const initialState = {
    todoList: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                todoList: action.payload,
                loading: false,
                error: null
            };
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
            case START_LOADING:
                return {
                    ...state,
                    loading: true
                };
            case STOP_LOADING:
                return {
                    ...state,
                    loading: false
                };                
        default:
            return state;
        }
};

export default reducer;