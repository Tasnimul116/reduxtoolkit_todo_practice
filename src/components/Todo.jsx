import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
   const todos =  useSelector(state=> state.Todo)
   const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))}
    </>
  )
}

export default Todo