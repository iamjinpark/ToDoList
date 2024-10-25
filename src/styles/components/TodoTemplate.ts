import styled from 'styled-components';

const StyledTodoTemplate = styled.div`
  width: 512px;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  background: #789dbc;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  background: white;
`;

export { StyledTodoTemplate, StyledTitle, StyledContent };
