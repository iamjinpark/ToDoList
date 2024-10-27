import { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

interface TodoProps {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoProps[];
  todo: TodoProps;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export type { TemplateProps, TodoProps, TodoListProps, AddTodoProps };
