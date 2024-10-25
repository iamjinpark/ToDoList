interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos?: TodoProps[];
  todo: TodoProps;
  removeTodo: (id: number) => void;
}

interface AddTodoProps {
  addTodo: (title: string) => void;
}

export type { TodoProps, TodoListProps, AddTodoProps };
