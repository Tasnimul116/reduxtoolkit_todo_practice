import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos); 
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleUpdate = (id, text)=>{
    setEditId(id);
    setEditText(text);
  }

  const handleSave = (id) => {
    dispatch(updateTodo({
      id,
      text: editText
    }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
    <h2>Todos</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => handleUpdate(todo.id, todo.text)}>Edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Todo;
