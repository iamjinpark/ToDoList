import TodoListItem from './TodoListItem';
import Styled from '../styles/components/TodoList';
import { TodoListProps, TodoProps } from '../types/TodoList';

function TodoList({
  todos,
  removeTodo,
  toggleTodo,
}: Omit<TodoListProps, 'todo'>) {
  return (
    <Styled.List>
      {todos.map((todo: TodoProps) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </Styled.List>
  );
}

export default TodoList;
