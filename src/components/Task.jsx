import React from "react";
import '../styles/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function Task( {text, finished} ) {
  return(
    <div className={finished ? "task-container finished" : "task-container"}>
      <div className="task-text">
        { text }
      </div>
      <div className="task-container-icon">
        <AiOutlineCloseCircle className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;