import React from "react";
import Form from "./Form";
import '../styles/TaskList.css'
import { useState } from "react";
import Task from "./Task";


function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask =  task => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.finished = !task.finished;
      }

      return task
    })

    setTasks(updatedTasks);
  }

  return(
    <div>
      <Form onSubmit={ addTask } />
      <div className="task-list-container">
        {
          tasks.map((task) => {
            return <Task 
              key={ task.id }
              id={ task.id }
              text={ task.text }
              finished={ task.finished }
              fnDeleteTask = { deleteTask }
              fnDoneTask = { completeTask }
            />
          })
        }
      </div>
    </div>
  )
}

export default TaskList;