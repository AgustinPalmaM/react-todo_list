import React from "react";
import '../styles/Form.css'

function Form(props) {
  
  return(
    <form className="form-task">
      <input 
        className="input-task"
        type="text"
        placeholder="Write a task"
        name="text"
      />
      <button className="button-task">
        Add New Task
      </button>
    </form>
  )
}

export default Form;