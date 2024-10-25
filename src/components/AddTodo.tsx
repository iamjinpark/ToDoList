import { MdAdd } from 'react-icons/md';
import {
  StyledAddForm,
  StyledAddInput,
  StyledAddButton,
} from '../styles/components/AddTodo';

function AddTodo() {
  return (
    <StyledAddForm role="form">
      <label htmlFor="newTodoItem" aria-label="할 일 추가하기" />
      <StyledAddInput
        id="newTodoItem"
        type="text"
        placeholder="할 일을 추가하세요."
      />
      <StyledAddButton typeof="submit" aria-label="할 일 추가 버튼">
        <MdAdd />
      </StyledAddButton>
    </StyledAddForm>
  );
}

export default AddTodo;
