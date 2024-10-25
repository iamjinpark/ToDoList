import { useCallback, useState } from 'react';
import icons from '../assets/icons';
import {
  StyledAddForm,
  StyledAddInput,
  StyledAddButton,
} from '../styles/components/AddTodo';

// 타입 설정
// AddTodo 컴포넌트의 props 타입 정의
interface AddTodoProps {
  addTodo: (title: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
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
    <StyledAddForm role="form" onSubmit={onSubmit}>
      <label htmlFor="newTodoItem" aria-label="할 일 추가하기" />
      <StyledAddInput
        id="newTodoItem"
        type="text"
        placeholder="할 일을 추가하세요."
        value={value}
        onChange={onChange}
      />
      <StyledAddButton type="submit" aria-label="할 일 추가 버튼">
        <icons.actions.add />
      </StyledAddButton>
    </StyledAddForm>
  );
}

export default AddTodo;
