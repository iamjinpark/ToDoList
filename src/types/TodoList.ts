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

// TODO : 타입 중복 수정하기
interface TodoListProps {
  todos: TodoProps[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface TodoListItemProps {
  todo: TodoProps;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export type {
  TemplateProps,
  TodoProps,
  TodoListProps,
  TodoListItemProps,
  AddTodoProps,
};
