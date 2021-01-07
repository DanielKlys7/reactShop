import styled from 'styled-components';

import { breakpoints, colors } from 'core/variablesConfig';
import { ReactComponent as Search } from 'common/assets/search.svg';

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${colors.gray300};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.desktop}) {
    width: 25%;
    margin-left: 5%;
  }
`;

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  padding: 0 15px;
  color: ${colors.gray500};
  opacity: 1;
`;

export const StyledSearchIcon = styled(Search)`
  position: absolute;
  right: 5%;
`;
