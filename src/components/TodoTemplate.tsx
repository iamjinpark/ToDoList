import { ReactNode } from 'react';
import {
  StyledTodoTemplate,
  StyledTitle,
  StyledContent,
} from '../styles/components/TodoTemplate';

// 타입 설정
interface Props {
  children: ReactNode;
}

function TodoTemplate({ children }: Props) {
  return (
    <StyledTodoTemplate>
      <StyledTitle>To Do List</StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledTodoTemplate>
  );
}

export default TodoTemplate;
