import { useGetPokemon } from "@/service/ReactQuery/PokemonQuery";
import { PokemonEvolutionContainer, ItemTitle } from "./styles";
import Image from "next/image";
import MasterBall from '@public/master-ball.png';
import { Skeleton } from "@mui/material";

type PokemonEvolutionProps = {
  url: string;
}
const PokemonEvolution = ({ url }: PokemonEvolutionProps) => {
  const { data: pokemon, isLoading } = useGetPokemon(url);

  return (pokemon &&
    <PokemonEvolutionContainer>
      {isLoading ?
        (<Skeleton variant='rounded' height={150} />) :
        <>
          <ItemTitle>{pokemon.name}</ItemTitle>
          <Image
            loader={() => `${pokemon.sprites?.front_default}?w=100` || MasterBall.src}
            src={pokemon.sprites?.front_default || MasterBall.src}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </>}

    </PokemonEvolutionContainer>
  )
}

export default PokemonEvolution;