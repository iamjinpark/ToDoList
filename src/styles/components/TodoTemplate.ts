import styled from 'styled-components';

const Styled = {
  TodoTemplate: styled.div`
    width: 512px;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 320px;
      margin-top: 6rem;
    }
  `,

  Title: styled.h1`
    margin: 0;
    background: #789dbc;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: 4rem;
      font-size: 1.5rem;
    }
  `,

  Content: styled.div`
    background: white;
  `,
};

export default Styled;
