import styled, { css } from 'styled-components';

const StyledList = styled.div`
  min-height: 350px;
  max-height: 600px;
  overflow-y: scroll;
`;

const StyledListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const StyledCheckBox = styled.div<{ checked: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: ${({ checked }) => (checked ? '#22b8cf' : 'inherit')};
  }
`;

const StyleListItemText = styled.div<{ checked: boolean }>`
  margin-left: 0.5rem;
  flex: 1;
  color: ${({ checked }) => (checked ? '#adb5bd' : 'inherit')};
  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
    `}
`;

const StyledRemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

export {
  StyledList,
  StyledListItem,
  StyledCheckBox,
  StyleListItemText,
  StyledRemoveButton,
};
