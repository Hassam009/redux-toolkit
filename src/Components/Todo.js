

import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../Features/todo/todoSlice'


const Todo = () => {
const todo=useSelector(state=>state.todo)
const dispatch=useDispatch()

  return (
    <div>
      Todos
    </div>
  )
} 

export default Todo 
