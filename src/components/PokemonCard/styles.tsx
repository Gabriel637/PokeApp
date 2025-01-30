import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #c5c6c7;
  border-radius: 8px;
  box-shadow: 0px 0px 17px -6px rgba(0,0,0,0.75);
  cursor: pointer;
  padding: 4px;

  :hover {
    transform: scale(1.02)
  }

  p {
    font-size: 20px;
    font-family: Roboto;
    text-transform: capitalize;
    color: #616161;
  }
`;

export const ChipIdContainer = styled.div`
  align-self: flex-end;
`