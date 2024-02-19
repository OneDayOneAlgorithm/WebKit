import { FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, START_LOADING, FETCH_EMPLOY_SUCCESS, FETCH_EMPLOY_FAILURE, EMPLOY_START_LOADING} from '../actions/TodoActions';

const initialState = {
    todoList: [],
    loading: true,
    error: null,
    employList: [],
    employLoading: true
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
        case FETCH_EMPLOY_SUCCESS:
            return {
                ...state,
                employList: action.payload,
                employLoading: false,
                error: null
            };
        case FETCH_EMPLOY_FAILURE:
            return {
                ...state,
                employLoading: false,
                error: action.payload
            };        
        case EMPLOY_START_LOADING:
            return {
                ...state,
                employLoading: true
            };                            
        default:
            return state;
        }
};

export default reducer;