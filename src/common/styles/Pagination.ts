import { breakpoints, colors } from 'core/variablesConfig';
import styled from 'styled-components';

interface StyledButtonProps {
  isSelected?: boolean;
  isFirstOrLastElement?: boolean;
}

export const StyledNav = styled.nav`
  margin: auto 0 0 0;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: none;
  margin: ${({ isFirstOrLastElement }) => (isFirstOrLastElement ? '0 0.8rem' : '0 0.4rem')};
  color: ${({ isFirstOrLastElement, isSelected }) =>
    isSelected ? (isFirstOrLastElement ? colors.gray400 : colors.primary) : colors.gray500};
  border: none;

  @media (min-width: ${breakpoints.desktop}) {
    margin: ${({ isFirstOrLastElement }) => (isFirstOrLastElement ? '0 1.6rem' : '0 0.8rem')};
  }
`;
