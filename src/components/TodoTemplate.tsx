import { TemplateProps } from '../types/TodoList';
import {
  StyledTodoTemplate,
  StyledTitle,
  StyledContent,
} from '../styles/components/TodoTemplate';

function TodoTemplate({ children }: TemplateProps) {
  return (
    <StyledTodoTemplate>
      <StyledTitle>To Do List</StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledTodoTemplate>
  );
}

export default TodoTemplate;
