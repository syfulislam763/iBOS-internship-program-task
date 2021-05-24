import react from 'react';
import './App.css';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';



function App() {




  return (
    <div className="container">

      <div>
          <h1 className="logo">iBOS Task</h1>
          <h5>React JS Internship Program</h5>
      </div>

      <Task1/>
      <Task2/>
    </div>
  );
}

export default App;
