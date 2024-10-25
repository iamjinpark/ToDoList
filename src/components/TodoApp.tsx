import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import TodoTemplate from './TodoTemplate';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { TodoProps } from '../types/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  // 초기 데이터 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
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
    }
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // To Do 추가하기
  // TODO : id값 동적으로 바꾸기
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
