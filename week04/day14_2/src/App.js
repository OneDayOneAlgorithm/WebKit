import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
// 만약 Routes를 불러 오지 못하면 
// npm uninstall react-router-dom 으로 모듈 삭제 후
// npm install react-router react-router-dom 으로 재 설치






function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/userList">User List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/gallery" element={<Gallery />} ></Route>
        <Route path="/counter" element={<Counter />} ></Route>
        <Route path="/userList" element={<UserList />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;