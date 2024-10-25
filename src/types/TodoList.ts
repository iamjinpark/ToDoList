interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoProps[];
}

interface TodoListItemProps {
  todo: TodoProps;
}

export type { TodoProps, TodoListProps, TodoListItemProps };
