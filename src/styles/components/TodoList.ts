import styled from 'styled-components';

interface StyledCheckBoxProps {
  $completed: boolean;
}

const Styled = {
  List: styled.div`
    min-height: 350px;
    max-height: 600px;
    overflow-y: scroll;
  `,

  ListItem: styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
      background: #f8f9fa;
    }
    & + & {
      border-top: 1px solid #dee2e6;
    }
  `,

  CheckBox: styled.div<StyledCheckBoxProps>`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
      color: ${({ $completed }) => ($completed ? '#adb5bd' : 'inherit')};
    }
  `,

  ListItemText: styled.div<StyledCheckBoxProps>`
    margin-left: 0.5rem;
    flex: 1;
    color: ${({ $completed }) => ($completed ? '#adb5bd' : 'inherit')};
    text-decoration: ${({ $completed }) =>
      $completed ? 'line-through' : 'none'};
  `,

  RemoveButton: styled.button`
    background: none;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;

    &:hover {
      color: #ff8787;
    }
  `,
};

export default Styled;
