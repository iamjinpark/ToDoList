interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

// TODO : 타입 중복 수정하기
interface TodoListProps {
  todos: TodoProps[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

interface TodoListItemProps {
  todo: TodoProps;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export type { TodoProps, TodoListProps, TodoListItemProps, AddTodoProps };
