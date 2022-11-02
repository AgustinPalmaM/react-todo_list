import React from "react";
import Form from "./Form";
import '../styles/TaskList.css'

function TaskList(props) {
  return(
    <>
      <Form />
      <div className="task-list-container">
        List of Tasks
      </div>
    </>
  )
}

export default TaskList;