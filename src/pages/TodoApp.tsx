import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import TodoTemplate from '../layout/TodoTemplate';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { TodoProps } from '../types/TodoList';

// 외부 API에서 데이터 불러오기
const fetchTodos = async (): Promise<TodoProps[]> => {
  try {
    const response = await axios.get<TodoProps[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=5',
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

function TodoApp() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  // 렌더링 시 데이터 불러오기
  const loadTodos = async () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      const todos = await fetchTodos();
      setTodos(todos);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // Todo 추가하기
  const addTodo = useCallback((title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        userId: 1,
        id: uuidv4(),
        title,
        completed: false,
      },
    ]);
  }, []);

  // Todo 삭제하기
  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // Todo 완료하기
  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </TodoTemplate>
  );
}

export default TodoApp;
