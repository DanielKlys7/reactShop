import styled from 'styled-components';

import { breakpoints } from 'core/variablesConfig';

export const ContentWrapper = styled.main`
  display: flex;
  justify-content: start;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: start;

  @media (min-width: ${breakpoints.desktop}) {
    width: 80%;
  }
`;
