import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
