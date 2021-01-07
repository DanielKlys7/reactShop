import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoints, colors } from 'core/variablesConfig';
import { Button } from 'common/components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${colors.white};
  height: 30%;
  align-items: start;
  width: 100%;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  margin: 0 0 3vh 0;
  padding: 0 10vw 5vh 10vw;

  @media (min-width: ${breakpoints.desktop}) {
    height: 10%;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  margin: 1.6rem 0;

  @media (min-width: ${breakpoints.desktop}) {
    margin-left: calc(15% + 1.25%);
  }
`;

export const Checkboxes = styled.div`
  display: flex;
  margin-top: 16px;

  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 0 0 1.6rem;
  }
`;

export const Avatar = styled.img`
  height: 20%;
  border-radius: 50%;
  position: absolute;
  top: 1.2rem;
  right: 10%;

  @media (min-width: ${breakpoints.desktop}) {
    position: static;
    margin: 0 calc(15% + 1.25% - 0.67em) 0 auto;
    height: 80%;
  }
`;

export const LoginButton = styled(Button)`
  width: 20%;
  padding: 8px 0;
  position: absolute;
  top: 1.2rem;
  right: 10%;

  @media (min-width: ${breakpoints.desktop}) {
    position: static;
    width: 10%;
    margin: 0 calc(15% + 1.25% - 0.67em) 0 auto;
    height: 40px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
