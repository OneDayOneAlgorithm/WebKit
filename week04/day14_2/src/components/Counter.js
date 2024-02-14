import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// 초기 상태
const initialState = {
  count: 0,
};

// 액션 타입
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성자 함수
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

// 카운터 컴포넌트
const Counter = ({ count, increment, decrement }) => (
  <div>
    <h1>카운터</h1>
    <p>현재 값: {count}</p>
    <button onClick={increment}>증가</button>
    <button onClick={decrement}>감소</button>
  </div>
);

// Redux 스토어와 컴포넌트 연결
const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// 애플리케이션
const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default App;
