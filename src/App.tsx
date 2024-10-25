import './styles/App.css';
import TodoTemplate from './components/TodoTemplate';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TodoTemplate>
        <AddTodo />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
