'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginForm, LoginUser } from '@/service/AuthService';
import { useRouter } from 'next/navigation'
import { Grid2 as Grid, Snackbar, Typography } from '@mui/material';
import { Button, ErrorText, FormContainer, FormWrapper } from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginSchema = yup.object().shape({
  user: yup.string().required('Please enter your username'),
  password: yup.string().min(5, 'Password is at least 5 characters').required('Please enter your password'),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

export default function Login() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });


  const submit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await LoginUser(data as LoginForm);
      router.push('/dashboard');
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleClose = () => {
    setIsError(false);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                User
              </Typography>
              <input {...register('user')} type='text' placeholder='Ash Ketchum' />
              <ErrorText><p>{errors.user && errors.user.message}</p></ErrorText>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                Password
              </Typography>
              <input {...register('password')} type='password' placeholder='********' />
              <ErrorText><p>{errors.password && errors.password.message}</p></ErrorText>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button type='submit' data-test-id="loginButton">{isLoading ? 'Loading...' : 'Enter'}</Button>
            </Grid>
          </Grid>
        </form >
      </FormWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isError}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Ops, this user is not allowed to access the Pokedex"
      />
    </FormContainer>
  );
}