import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  text-transform: capitalize;
  color: #616161;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  background-size: cover;
`

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const AbilityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px;
`

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-family: Roboto;
  text-transform: capitalize;
  margin: 0;
`;

export const Item = styled.p`
  font-size: 16px;
  font-family: Roboto;
  text-transform: capitalize;
  margin: 0;
`;

export const ItemDesc = styled.p`
  font-size: 16px;
  font-family: Roboto;
  margin: 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: #616161;
  cursor: pointer;
`

type TabContainerProps = {
  color: string;
}

export const TabContainer = styled.div<TabContainerProps>`
  button  {
    color: ${props => props.color} !important;
  }

  .MuiTabs-indicator {
    background-color: ${props => props.color} !important;
  }
`;

export const PokemonEvolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TabContent = styled.div`
  width: 100%;
  height: 240px;
`

export const EvolutionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`