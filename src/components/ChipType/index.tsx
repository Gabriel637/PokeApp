import { colorsPokemonType } from "@/helpers/consts";
import { ChipContainer } from "./styles";
import { TPokemonType } from "@/service/interfaces/IPokemon";

type ChipProps = {
  type: TPokemonType;
}
const ChipType = ({ type }: ChipProps) => {
  const color = colorsPokemonType[type] || colorsPokemonType.normal;

  return (
    <ChipContainer color={color}>
      <span>{type}</span>
    </ChipContainer>
  )

}

export default ChipType;