import { useCallback, useEffect, useRef, useState } from 'react';
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

  // To Do 추가하기
  const nextId = useRef(6);
  const addTodo = useCallback(
    (title: string) => {
      const todo = {
        id: nextId.current,
        title,
        completed: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // To Do 삭제하기
  const removeTodo = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // To Do 수정하기
  const toggleTodo = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </TodoTemplate>
  );
}

export default TodoApp;
