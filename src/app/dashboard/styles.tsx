import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-family: Roboto;
  border: 1px solid #616161;
  border-radius: 3px;
`;

export const ButtonIconStyled = styled.button`
  background: transparent;
  border: 1px solid #616161;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
  color: #616161;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
  font-family: Roboto;
  font-size: 32px;
  color: #d32f2f;
  }
`;
