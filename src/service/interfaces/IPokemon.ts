
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export type TPokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";
export interface Type {
  slot: number;
  type: {
    name: TPokemonType;
    url: string;
  };
}

export interface Sprites {
  front_default: string | null;
  back_default: string | null;
  front_shiny: string | null;
  back_shiny: string | null;
  other?: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Species {
  name: string;
  url: string;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}


export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  sprites: Sprites;
  stats: Stat[];
  species: Species;
  types: Type[];
  moves: Move[];
  order: number;
  is_default: boolean;
}

export interface PokemonEntry {
  flavor_text_entries: {
    flavor_text: string,
    language: {
      name: string,
      url: string
    },
    version: {
      name: string,
      url: string
    }
  }[],
}

export interface PokemonAbility {
  name: string;
  flavor_text_entries: {
    flavor_text: string,
    language: {
      name: string,
      url: string
    },
    version: {
      name: string,
      url: string
    }
  }[],
}

export interface PokemonSpecies {
  name: string;
  url: string;
  evolution_chain: {
    url: string;
  }
}

export interface Evolution {
  evolves_to: Evolution[];
  is_baby: boolean;
  species: Species;
};
export interface EvolutionChain {
  chain: {
    evolves_to: Evolution[];
    is_baby: boolean;
    species: Species;
  };
  id: number;
}
