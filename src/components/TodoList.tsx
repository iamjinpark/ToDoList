import TodoListItem from './TodoListItem';
import { StyledList } from '../styles/components/TodoList';

function TodoList() {
  return (
    <StyledList>
      <TodoListItem />
      <TodoListItem />
    </StyledList>
  );
}

export default TodoList;
