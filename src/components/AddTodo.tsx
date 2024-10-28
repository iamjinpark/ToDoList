import { useCallback, useState } from 'react';
import icons from '../assets/icons';
import Styled from '../styles/components/AddTodo';
import { AddTodoProps } from '../types/TodoList';

function AddTodo({ addTodo }: AddTodoProps) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const submitNewTodo = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        addTodo(value);
        setValue('');
      }
    },
    [addTodo, value],
  );

  return (
    <Styled.AddForm role="form" onSubmit={submitNewTodo}>
      <Styled.AddLabel htmlFor="newTodoItem">할 일 추가하기</Styled.AddLabel>
      <Styled.AddInput
        id="newTodoItem"
        name="newTodItem"
        type="text"
        placeholder="할 일을 추가하세요."
        value={value}
        onChange={handleInputChange}
        required
      />
      <Styled.AddButton type="submit" aria-label="할 일 추가 버튼">
        <icons.actions.add />
      </Styled.AddButton>
    </Styled.AddForm>
  );
}

export default AddTodo;
