import logo from './images/pngwing.com.png';
import Task from './components/Task'
import Form from './components/Form';
import TaskList from './components/TaskList';
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
        <TaskList />

      </div>
    </div>
  );
}

export default App;
