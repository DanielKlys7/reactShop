import styled from 'styled-components';

import { breakpoints } from 'core/variablesConfig';

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: start;

  @media (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`;
