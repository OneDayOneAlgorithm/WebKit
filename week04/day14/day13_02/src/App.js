import {Component} from 'react';

class Example extends Component {
    constructor(props){
        super(props);
        // 클래스형 컴포넌트는 state객체를 임의로 만든다.
        this.state = {count: 1, 'name':'Hong'}
    }

    componentDidMount(){
        console.log(">>> componentDidMount", this.state);
    }

    componentDidUpdate(){
        console.log(">>> componentDidUpdate", this.state);
    }

    componentWillUnmount(){
        console.log(">>> componentWillUnmount");
    }
    // render 함수 반드시 선언
    render(){
        return(<>
            <p>Count:{this.state.count}</p>
            <p><button onClick={()=>
                // this.setState를 활용하여 상태변경
                this.setState((e)=>({count:e.count+1}))
            }
            >클릭</button></p>
        </>)
    }
}

class MyForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: '1'
        }
        // 핸들러 함수 바인드 하기 - 그래야 state 사용 가능
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){
        this.setState((e)=>({inputVal:"하이"}))
    }

    render(){
        return(<>
            <input onChange={this.changeHandler} type='text' value={this.state.inputVal}/>
            <p>입력된 값 : {this.state.inputVal}</p>
        </>)
    }   
}


function App() {
    return(<>
        <h1>App Component</h1>
        <Example/>
        <MyForm/>
    </>)
}

export default App;