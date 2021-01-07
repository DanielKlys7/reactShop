import styled from 'styled-components';

import { breakpoints, colors } from 'core/variablesConfig';
import { ReactComponent as Empty } from 'common/assets/empty.svg';

export const Wrapper = styled.div`
  width: 90%;
  height: 40%;
  margin: 5%;
  border-radius: 8px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.desktop}) {
    width: 35%;
  }
`;

export const EmptyIcon = styled(Empty)`
  margin-bottom: 10%;

  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
  }
`;

export const Header = styled.p`
  font-size: 1.8rem;
  margin-bottom: 4px;
  color: ${colors.gray500};
`;

export const Subtext = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: ${colors.gray400};
`;
