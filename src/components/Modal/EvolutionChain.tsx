import { useGetEvolutionChain } from "@/service/ReactQuery/PokemonQuery";
import PokemonEvolution from "./PokemonEvolution";
import { POKE_API_URL } from "@/service/PokemonService";
import { Grid2, Skeleton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { EvolutionContainer } from "./styles";

type PokemonEvolutionProps = {
  url: string;
}
const EvolutionChain = ({ url }: PokemonEvolutionProps) => {
  const { data: evolutionChain, isLoading } = useGetEvolutionChain(url);

  return (evolutionChain &&
    <Grid2 container spacing={2} margin={2} direction='row' justifyContent='center' alignItems='center'>
      {
        isLoading ?
          (<Skeleton variant='rounded' height={150} />) :
          <>
            <PokemonEvolution url={`${POKE_API_URL}/pokemon/${evolutionChain?.chain.species?.name}`} />
            {evolutionChain.chain.evolves_to.map((evolution) => (
              <EvolutionContainer key={`evolution-chain-${evolution.species.name}`}>
                <ArrowForwardIosIcon />
                <PokemonEvolution
                  url={`${POKE_API_URL}/pokemon/${evolution.species.name}`}
                  key={`evolution-${evolution.species.name}`}
                />
                {evolution.evolves_to.length > 0 &&
                  evolution.evolves_to.map((evolution2) => (
                    <EvolutionContainer key={`evolution-chain-${evolution2.species.name}`}>
                      <ArrowForwardIosIcon />
                      <PokemonEvolution
                        url={`${POKE_API_URL}/pokemon/${evolution2.species.name}`}
                        key={`evolution-${evolution2.species.name}`}
                      />
                    </EvolutionContainer>
                  ))}
              </EvolutionContainer>
            ))}
          </>
      }
    </Grid2>
  )
}

export default EvolutionChain;