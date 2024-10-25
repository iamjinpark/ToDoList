import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoTemplate from './TodoTemplate';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { TodoProps } from '../types/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  // 초기 외부 API 데이터 연동
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        const response = await axios.get<TodoProps[]>(
          'https://jsonplaceholder.typicode.com/todos?_limit=5',
        );
        setTodos(response.data);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoTemplate>
      <AddTodo />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default TodoApp;
