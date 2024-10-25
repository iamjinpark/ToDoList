import icons from '../assets/icons';
import {
  StyledListItem,
  StyledCheckBox,
  StyleListItemText,
  StyledRemoveButton,
} from '../styles/components/TodoList';
import { TodoListItemProps } from '../types/TodoList';

function TodoListItem({ todo }: TodoListItemProps) {
  const { title, completed } = todo;

  return (
    <StyledListItem>
      <StyledCheckBox $completed={completed}>
        {completed ? <icons.checkbox.checked /> : <icons.checkbox.unchecked />}
        <StyleListItemText $completed={completed}>{title}</StyleListItemText>
      </StyledCheckBox>
      <StyledRemoveButton>
        <icons.actions.delete />
      </StyledRemoveButton>
    </StyledListItem>
  );
}

export default TodoListItem;
