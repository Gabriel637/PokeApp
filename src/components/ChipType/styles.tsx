import styled from '@emotion/styled';

type ChipProps = {
  color: string;
}

export const ChipContainer = styled.div<ChipProps>`
  border-radius: 30px;
  width: 100px;
  padding: 8px;
  background-color: ${props => props.color};
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-transform: capitalize;
    color: #2f2f2f;
  }
`