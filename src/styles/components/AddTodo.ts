import styled from 'styled-components';

const StyledAddForm = styled.form`
  display: flex;
  background: #fef9f2;
`;

const StyledAddInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 1.125rem;
  line-height: 1.5;
  flex: 1;
  &::placeholder {
    color: #a1c0dd;
  }
`;

const StyledAddButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #c9e9d2;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #a8d6b8;
  }
`;

export { StyledAddForm, StyledAddInput, StyledAddButton };
