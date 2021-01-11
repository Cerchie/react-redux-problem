import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const DEFAULT_FORM = {
  text: ""
};

function NewTodoForm({ addTodo }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(addTodo)
    const todos = addTodo({ ...form, id: uuidv4() });

   setForm('DATAFROMNTF');
   
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">text</label>
        <input
          type="text"
          name="text"
          id="todo-text"
          onChange={handleChange}
          value={form.text}
        />
        <button>
          Add Todo!
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;