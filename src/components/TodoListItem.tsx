import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import {
  StyledListItem,
  StyledCheckBox,
  StyleListItemText,
  StyledRemoveButton,
} from '../styles/components/TodoList';

function TodoListItem() {
  return (
    <StyledListItem>
      <StyledCheckBox>
        <RiCheckboxBlankCircleLine />
        <StyleListItemText className="text">할 일</StyleListItemText>
      </StyledCheckBox>
      <StyledRemoveButton className="remove">
        <TiDelete />
      </StyledRemoveButton>
    </StyledListItem>
  );
}

export default TodoListItem;
