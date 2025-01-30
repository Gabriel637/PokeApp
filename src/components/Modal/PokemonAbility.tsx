import { useGetAbility } from "@/service/ReactQuery/PokemonQuery";
import { ItemDesc, ItemTitle, AbilityContainer } from "./styles";
import { PokemonAbility as IPokemonAbility } from "@/service/interfaces/IPokemon";
import { replaceSpecialCharacters } from "@/helpers/formatString";
import { Skeleton } from "@mui/material";

type PokemonAbilityProps = {
  url: string;
}
const PokemonAbility = ({ url }: PokemonAbilityProps) => {
  const { data: pokemon, isLoading } = useGetAbility(url);

  const getEnglishEntry = (pokemonEntry: IPokemonAbility) => {
    const englishEntry = pokemonEntry.flavor_text_entries.find((entry => entry.language.name === 'en'));
    return replaceSpecialCharacters(englishEntry?.flavor_text || 'Description not found');
  }

  return (pokemon &&
    <AbilityContainer>
      {isLoading ?
        (<Skeleton variant='text' height={150} />) :
        <>
          <ItemTitle>{pokemon.name}</ItemTitle>
          <ItemDesc>{getEnglishEntry(pokemon)}</ItemDesc>
        </>
      }
    </AbilityContainer>
  )
}

export default PokemonAbility;