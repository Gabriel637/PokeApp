import { colorsPokemonType } from "@/helpers/consts";
import { StatProgressFill, StatProgressContainer } from "./styles";
import { TPokemonType } from "@/service/interfaces/IPokemon";

type StatProgressProps = {
  value: number;
  type: TPokemonType;
}
const StatProgress = ({ value, type }: StatProgressProps) => {
  const color = colorsPokemonType[type] || colorsPokemonType.normal;
  const calculatedValue = (value / 150) * 100;

  return (
    <StatProgressContainer>
      <StatProgressFill value={calculatedValue} color={color} />
    </StatProgressContainer>
  )

}

export default StatProgress;