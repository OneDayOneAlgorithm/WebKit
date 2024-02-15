import { Child01 } from "./components/Child01";
import { Child02 } from "./components/Child02";
import { Child03 } from "./components/Child03";
function App() {
  return (
    <div className="App">
      <h1>안녕, 세계!</h1>
      <hr/>
      <Child01/>
      <hr/>
      <Child02/>
      <hr/>
      <Child03/>
    </div>
  );
}

export default App;
