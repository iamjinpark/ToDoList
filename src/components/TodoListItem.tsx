import icons from '../assets/icons';
import {
  StyledListItem,
  StyledCheckBox,
  StyleListItemText,
  StyledRemoveButton,
} from '../styles/components/TodoList';
import { TodoListProps } from '../types/TodoList';

function TodoListItem({
  todo,
  removeTodo,
  toggleTodo,
}: Omit<TodoListProps, 'todos'>) {
  const { id, title, completed } = todo;

  return (
    <StyledListItem>
      <StyledCheckBox $completed={completed} onClick={() => toggleTodo(id)}>
        {completed ? <icons.checkbox.checked /> : <icons.checkbox.unchecked />}
        <StyleListItemText $completed={completed}>{title}</StyleListItemText>
      </StyledCheckBox>
      <StyledRemoveButton onClick={() => removeTodo(id)}>
        <icons.actions.delete />
      </StyledRemoveButton>
    </StyledListItem>
  );
}

export default TodoListItem;
