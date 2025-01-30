'use client'
import { useState } from 'react';
import { useGetPokemon } from '@/service/ReactQuery/PokemonQuery';
import { CardContainer, ChipIdContainer } from './styles';
import { Chip, Skeleton, Typography } from '@mui/material';
import MasterBall from '@public/master-ball.png';
import Image from 'next/image';
import { padToFourDigits } from '@/helpers/formatString';
import Modal from '../Modal';

type PokemonCardProps = {
  url: string
}
const PokemonCard = ({ url }: PokemonCardProps) => {
  const [open, setOpen] = useState(false);
  const { data: pokemon, isLoading } = useGetPokemon(url);

  const openModal = () => setOpen(true);

  const closeModal = (e?: React.MouseEvent, reason?: string) => {
    if (reason && reason === 'backdropClick') {
      return
    }
    setOpen(false)
  };

  if (isLoading) return <Skeleton variant='rounded' height={150} />;

  if (pokemon?.name) {
    return (
      <CardContainer onClick={openModal} data-test-id='pokemon-card'>
        <ChipIdContainer>
          <Chip label={`#${padToFourDigits(pokemon.id)}`} variant="outlined" />
        </ChipIdContainer>
        <Image
          priority
          loader={() => `${pokemon.sprites?.front_default}?w=96` || MasterBall.src}
          src={pokemon.sprites?.front_default || MasterBall.src}
          alt={pokemon.name}
          width={96}
          height={96}
        />
        <Typography variant="body2">{pokemon?.name}</Typography>
        <Modal open={open} onClose={closeModal} pokemon={pokemon} />
      </CardContainer>
    );
  }
};

export default PokemonCard;