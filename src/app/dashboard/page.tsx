'use client'
import React, { useState } from 'react';
import { useListPokemon } from '@/service/ReactQuery/PokemonQuery';
import { Button, Grid2, Snackbar } from '@mui/material';
import { ButtonIconStyled, PageContainer, Input } from './styles';
import { Search } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { fetchPokemonDetail, POKE_API_URL } from '@/service/PokemonService';
import dynamic from 'next/dynamic';

const PokemonCard = dynamic(() => import('@/components/PokemonCard'), { ssr: false });

const PokemonsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonUrlSelected, setPokemonUrlSelected] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const { data } = useListPokemon(currentPage);
  const { register, getValues, resetField } = useForm();

  const nextPage = () => setCurrentPage((prev) => (data?.next ? prev + 1 : prev));
  const previousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const searchPokemon = async () => {
    const { pokemonSearch } = getValues();
    try {
      await fetchPokemonDetail(`${POKE_API_URL}/pokemon/${pokemonSearch}`);
      setPokemonUrlSelected(`${POKE_API_URL}/pokemon/${pokemonSearch}`);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  const cleanPokemonUrlSelected = () => {
    setPokemonUrlSelected('');
    resetField('pokemonSearch');
  }

  const handleClose = () => {
    setIsError(false);
  }

  return (
    <PageContainer>
      <h2>Pokédex</h2>

      <Grid2 container justifyContent={'center'} spacing={2}>
        <Input placeholder='Search pokemon' {...register('pokemonSearch')} />
        <ButtonIconStyled data-test-id='searchButton'>
          <Search onClick={searchPokemon} />
        </ButtonIconStyled>
      </Grid2>

      <Grid2 container spacing={2} margin={4}>
        {pokemonUrlSelected.length > 0 ?
          <Grid2 size={{ xs: 6, md: 4, lg: 3 }}>
            <PokemonCard url={pokemonUrlSelected} />
          </Grid2>
          : data?.results?.map((pokemon) => (
            <Grid2 key={pokemon.name} size={{ xs: 6, md: 4, lg: 3 }}>
              <PokemonCard url={pokemon.url} />
            </Grid2>
          ))}
      </Grid2>

      <Grid2 container margin={4} marginBottom={12} justifyContent='space-between'>
        {pokemonUrlSelected.length > 0 ?
          <Button
            variant='outlined'
            color="error"
            onClick={cleanPokemonUrlSelected}
          >
            Go back to list
          </Button>
          :
          <>
            <Button
              variant='outlined'
              color="error"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </Button>
            <Button
              variant='contained'
              color="error"
              onClick={nextPage}
              disabled={!data?.next}
            >
              Next Page
            </Button>
          </>
        }
      </Grid2>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isError}
        onClose={handleClose}
        autoHideDuration={6000}
        message="Ops, Pokemon not found, try it again with the correct name or ID"
      />
    </PageContainer >
  );
};

export default PokemonsPage;