import { TemplateProps } from '../types/TodoList';
import Styled from '../styles/components/TodoTemplate';

function TodoTemplate({ children }: TemplateProps) {
  return (
    <Styled.TodoTemplate>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Content>{children}</Styled.Content>
    </Styled.TodoTemplate>
  );
}

export default TodoTemplate;
