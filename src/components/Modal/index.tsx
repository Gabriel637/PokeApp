'use client'
import React, { SyntheticEvent } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { PokemonDetails, PokemonEntry } from '@/service/interfaces/IPokemon';
import { useGetPokemonEntry, useGetSpecies } from '@/service/ReactQuery/PokemonQuery';
import { Button, Content, Header, ItemContainer, Title, TabContainer, Item, TabContent, ItemDesc } from './styles';
import Image from 'next/image';
import MasterBall from '@public/master-ball.png';
import { Grid2, Tab, Tabs, Dialog, DialogContent } from '@mui/material';
import { padToFourDigits, replaceSpecialCharacters } from '@/helpers/formatString';
import StatProgress from '../StatProgress';
import ChipType from '../ChipType';
import { colorsPokemonType } from '@/helpers/consts';
import PokemonAbility from './PokemonAbility';
import EvolutionChain from './EvolutionChain';

type ModalProps = {
  open: boolean;
  onClose: (e?: React.MouseEvent, reason?: string) => void;
  pokemon: PokemonDetails;
}

type TabType = 'stats' | 'abilities' | 'forms';

type OnChangeTab = (e?: SyntheticEvent, tab?: TabType) => void;
const Modal = ({ open, onClose, pokemon }: ModalProps) => {
  const [tabValue, setTabValue] = React.useState<TabType>('stats');

  const pokemonMainType = pokemon.types[0].type.name;

  const readStat = (stat: number) => {
    if (stat > 100) {
      return 100;
    }
    return stat;
  }

  const { data: pokemonEntry } = useGetPokemonEntry(pokemon.id);
  const { data: pokemonSpecies } = useGetSpecies(pokemon.species.url);

  const getEnglishEntry = (pokemonEntry: PokemonEntry) => {
    const englishEntry = pokemonEntry?.flavor_text_entries?.find((entry => entry.language.name === 'en'));
    return replaceSpecialCharacters(englishEntry?.flavor_text || 'Description not found');
  }

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChange = (e: SyntheticEvent, tab: TabType) => {
    setTabValue(tab);
  }

  const Stats = () => {
    return (
      pokemon.stats.map(stat =>
        <ItemContainer key={`${pokemon.id}/${stat.stat.name}`} >
          <Item>{stat.stat.name === 'hp' ? 'HP' : stat.stat.name}</Item>
          <StatProgress value={readStat(stat.base_stat)} type={pokemonMainType} />
        </ItemContainer>
      )
    )
  }

  const Abilities = () => {
    return (
      pokemon.abilities.map(stat =>
        <PokemonAbility url={stat.ability.url} key={stat.ability.url} />
      )
    )
  }

  const Forms = () => {
    if (pokemonSpecies) return (
      <EvolutionChain url={pokemonSpecies.evolution_chain.url} key={pokemonSpecies.evolution_chain.url} />
    )
  }

  return (
    <Dialog open={open} onClick={handleInsideClick} data-test-id='pokemon-modal'>
      <Header>
        <Title data-test-id="pokemon-modal-name">{pokemon.name} {`#${padToFourDigits(pokemon.id)}`}</Title>
        <Button type='button' onClick={onClose}>
          <CloseIcon />
        </Button>
      </Header>
      <DialogContent>
        <Content>
          <Image
            loader={() => `${pokemon.sprites?.front_default}?w=256` || MasterBall.src}
            src={pokemon.sprites?.front_default || MasterBall.src}
            alt={pokemon.name}
            width={256}
            height={256}
          />
          <Grid2>
            <ItemDesc>
              {pokemonEntry && getEnglishEntry(pokemonEntry) || 'Unfortanely a description for its Pokemon is not provided yet, you can reach to the PokeApi team to include one.'}
            </ItemDesc>
          </Grid2>
          <Grid2 container spacing={2}>
            {pokemon.types.map(type =>
              <ChipType key={`${pokemon.id}/${type.type.name}`} type={type.type.name} />
            )}
          </Grid2>
          <Grid2>
            <TabContainer color={colorsPokemonType[pokemonMainType]}>
              <Tabs onChange={handleChange as OnChangeTab} value={tabValue}>
                <Tab label="Stats" value="stats" />
                <Tab label="Abilities" value="abilities" />
                <Tab label="Forms" value="forms" />
              </Tabs>
            </TabContainer>
          </Grid2>
          <TabContent>
            {tabValue === 'stats' && <Stats />}
            {tabValue === 'abilities' && <Abilities />}
            {tabValue === 'forms' && pokemonSpecies && <Forms />}
          </TabContent>
        </Content>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;