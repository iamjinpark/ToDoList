import TodoListItem from './TodoListItem';
import { StyledList } from '../styles/components/TodoList';
import { TodoListProps, TodoProps } from '../types/TodoList';

function TodoList({ todos, removeTodo, toggleTodo }: TodoListProps) {
  return (
    <StyledList>
      {todos.map((todo: TodoProps) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </StyledList>
  );
}

export default TodoList;
