import TodoListItem from './TodoListItem';
import { StyledList } from '../styles/components/TodoList';
import { TodoListProps, TodoProps } from '../types/TodoList';

function TodoList({ todos }: TodoListProps) {
  return (
    <StyledList>
      {todos.map((todo: TodoProps) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </StyledList>
  );
}

export default TodoList;
