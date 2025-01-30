import styled from '@emotion/styled';
import background from '../../../../public/background.png';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(${background.src});
  overflow: hidden;
  background-size: cover;
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  input {
    padding: 16px 4px;
    width: fill-available;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  color: ${props => props.color};
  cursor: pointer;
`;

export const ErrorText = styled.div`
  height: 20px;
  color: red;

  p {
    margin: 0;
    font-size: 14px;
    font-family: Roboto;
  }
`;