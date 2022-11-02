import logo from './images/pngwing.com.png';
import Task from './components/Task'
import './App.css';


function App() {
  return (
    <div className="todo-list">
      <div className="title-container">
        <img 
          src={ logo }
          className='title-logo' 
          alt="title_image" 
        />
      </div>
      <div className="todo-list-main">
        <h1>My tasks</h1>
        <Task 
          text='Learn React'
          finished={ false }
        />
      </div>
    </div>
  );
}

export default App;
