interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoProps[];
  removeTodo: (id: number) => void;
}

interface TodoListItemProps {
  todo: TodoProps;
  removeTodo: (id: number) => void;
}

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export type { TodoProps, TodoListProps, TodoListItemProps, AddTodoProps };
