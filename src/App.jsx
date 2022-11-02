import logo from './images/pngwing.com.png';
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
    </div>
  );
}

export default App;
