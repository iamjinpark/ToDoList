import './styles/App.css';
import TodoTemplate from './components/TodoTemplate';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div>
      <TodoTemplate>
        <AddTodo />
      </TodoTemplate>
    </div>
  );
}

export default App;
