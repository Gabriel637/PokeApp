import { PokemonAbility, PokemonDetails, PokemonEntry, EvolutionChain, PokemonSpecies } from "./interfaces/IPokemon";

export const POKE_API_URL = "https://pokeapi.co/api/v2";

export type TPokemon = {
  name: string;
  url: string;
}

export type Response = {
  count: string;
  results: TPokemon[];
  previous: string;
  next: string;
}

export const fetchPokemons = async (page = 1, limit = 20): Promise<Response> => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${POKE_API_URL}/pokemon?offset=${offset}&limit=${limit}`);

  if (!response.ok) {
    throw new Error("Error loading pokemon");
  }

  return response.json();
};

export const fetchPokemonDetail = async (url: string): Promise<PokemonDetails> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading pokemon details");
  }

  return response.json();
};

export const fetchPokemonEntry = async (id: number): Promise<PokemonEntry> => {
  const response = await fetch(`${POKE_API_URL}/pokemon-species/${id}`);

  if (!response.ok) {
    throw new Error("Error loading pokemon details");
  }

  return response.json();
}

export const fetchPokemonAbility = async (url: string): Promise<PokemonAbility> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading pokemon abilities");
  }

  return response.json();
};

export const fetchPokemonSpecies = async (url: string): Promise<PokemonSpecies> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading pokemon species");
  }

  return response.json();
};

export const fetchPokemonEvolutionChain = async (url: string): Promise<EvolutionChain> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading pokemon forms");
  }

  return response.json();
};