import styled from 'styled-components';

import { breakpoints, colors } from 'core/variablesConfig';
import { Button } from 'common/components';
import hero from 'common/assets/login.png';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 2vh;
  width: 100%;
`;

export const RetrivePassword = styled.p`
  text-align: left;
  text-decoration: underline;
  font-size: 1.4rem;
  margin-top: 8px;
  color: ${colors.gray400};
`;

export const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 5vh 10vw;
`;

export const Logo = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20vh;
`;

export const Input = styled.input`
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  color: ${colors.gray400};
  width: 100%;
  border: 1px solid ${colors.gray300};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}) {
    width: 30vw;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
`;

export const Image = styled.div`
  display: none;

  @media (min-width: ${breakpoints.desktop}) {
    display: block;
    width: 30%;
    background-image: url(${hero});
    background-repeat: no-repeat;
    height: 100vh;
  }
`;
