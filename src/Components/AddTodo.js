import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../Features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty todos
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
