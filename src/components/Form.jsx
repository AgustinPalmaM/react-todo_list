import React from "react";
import '../styles/Form.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function Form(props) {
  
  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSend = event => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(), 
      text: input,
      finished: false
    };

    props.onSubmit(newTask);

  }

  return(
    <form 
      className="form-task"
      onSubmit={ handleSend }>
      <input 
        className="input-task"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={ handleChange }
        
      />
      <button className="button-task">
        Add New Task
      </button>
    </form>
  )
}

export default Form;