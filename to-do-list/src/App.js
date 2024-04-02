import { Provider } from 'react-redux';
import './App.css';
import store from './Store/store';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>To do list </h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
