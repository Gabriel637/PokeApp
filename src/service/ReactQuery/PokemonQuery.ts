import { useQuery } from '@tanstack/react-query';
import { fetchPokemons, fetchPokemonDetail, Response, fetchPokemonEntry, fetchPokemonAbility, fetchPokemonEvolutionChain, fetchPokemonSpecies } from '@/service/PokemonService';
import { PokemonAbility, PokemonDetails, PokemonEntry, EvolutionChain, PokemonSpecies } from '../interfaces/IPokemon';

export const POKEMON_QUERY_KEY = 'pokemons';

export const useListPokemon = (page = 1) => {
  return useQuery<Response>({
    queryKey: [`${POKEMON_QUERY_KEY}?page=${page}`],
    queryFn: () => fetchPokemons(page),
  });
};

export const useGetPokemon = (url: string) => {
  return useQuery<PokemonDetails>({
    queryKey: [`${POKEMON_QUERY_KEY}/pokemon/${url}`],
    queryFn: () => fetchPokemonDetail(url),
  });
};

export const useGetPokemonEntry = (id: number) => {
  return useQuery<PokemonEntry>({
    queryKey: [`${POKEMON_QUERY_KEY}/entries/${id}`],
    queryFn: () => fetchPokemonEntry(id),
  });
};

export const useGetAbility = (url: string) => {
  return useQuery<PokemonAbility>({
    queryKey: [`${POKEMON_QUERY_KEY}/ability/${url}`],
    queryFn: () => fetchPokemonAbility(url),
  });
};

export const useGetSpecies = (url: string) => {
  return useQuery<PokemonSpecies>({
    queryKey: [`${POKEMON_QUERY_KEY}/species/${url}`],
    queryFn: () => fetchPokemonSpecies(url),
  });
};

export const useGetEvolutionChain = (url: string) => {
  return useQuery<EvolutionChain>({
    queryKey: [`${POKEMON_QUERY_KEY}/evolution/${url}`],
    queryFn: () => fetchPokemonEvolutionChain(url),
  });
};

