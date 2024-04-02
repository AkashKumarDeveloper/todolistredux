import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../Store/Slice/slice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleEdit = (id, newText) => {
    dispatch(editTodo({ id, newText }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleEdit(todo.id, prompt('Enter new text:'))}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
