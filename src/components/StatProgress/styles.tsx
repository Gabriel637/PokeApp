import styled from '@emotion/styled';

export const StatProgressContainer = styled.div`
  display:flex;
  border-radius: 2px;
  height: 18px;
  width: 100%;
  background-color: #f1f1f1;
  border: 1px solid #c5c6c7;
`
type StatProps = {
  value: number;
  color: string;
}

export const StatProgressFill = styled.div<StatProps>`
  border-radius: 2px;
  width: ${props => props.value}%;
  transition: 5s ease;
  background-color: ${props => props.color};
`