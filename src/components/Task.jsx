import React from "react";
import '../styles/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function Task( {id, text, finished, fnDoneTask, fnDeleteTask } ) {



  return(
    <div className={finished ? "task-container finished" : "task-container"}>
      <div 
        className="task-text"
        onClick={ () => fnDoneTask(id) }>
        { text }
      </div>
      <div 
        className="task-container-icon"
        onClick={ () => fnDeleteTask(id) }>
        <AiOutlineCloseCircle className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;