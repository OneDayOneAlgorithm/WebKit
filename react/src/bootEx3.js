import './App.css';

function Column(props) {
  console.log(props.content);
  return (<div className="col-sm-4">
    <h3>{props.title}</h3>
    <p>{props.content[0]}</p>
    <p>{props.content[1]}</p>
  </div>);
}

function BootEx3() {
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Comstudy Coding Schools</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
      <div className="container mt-5">
        <div className="row">
          <Column title="Lecture" content={["22222","11111"]} />
          <Column title="Gallery" content={["22222","11111"]} />
          <Column title="Free Board" content={["22222","11111"]} />
        </div>
      </div>
    </div>
  );
}

export default BootEx3;