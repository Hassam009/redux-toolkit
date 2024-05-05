
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/todo/todoSlice';

const Todo = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
