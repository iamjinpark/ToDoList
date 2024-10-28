import icons from '../assets/icons';
import Styled from '../styles/components/TodoList';
import { TodoListProps } from '../types/TodoList';

function TodoListItem({
  todo,
  removeTodo,
  toggleTodo,
}: Omit<TodoListProps, 'todos'>) {
  const { id, title, completed } = todo;

  return (
    <Styled.ListItem>
      <Styled.CheckBox $completed={completed} onClick={() => toggleTodo(id)}>
        {completed ? <icons.checkbox.checked /> : <icons.checkbox.unchecked />}
        <Styled.ListItemText $completed={completed}>
          {title}
        </Styled.ListItemText>
      </Styled.CheckBox>
      <Styled.RemoveButton
        onClick={() => removeTodo(id)}
        aria-label="할 일 삭제 버튼"
      >
        <icons.actions.delete />
      </Styled.RemoveButton>
    </Styled.ListItem>
  );
}

export default TodoListItem;
