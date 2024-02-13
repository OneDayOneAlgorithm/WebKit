import './App.css';

function Column() {
  return (<div className="col-sm-4">
    <h3>Column 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
  </div>);
}

function BootEx2() {
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
      <div className="container mt-5">
        <div className="row">
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}

export default BootEx2;