import { colors } from 'core/variablesConfig';
import styled from 'styled-components';

interface StyledButtonProps {
  isSelected?: boolean;
  isFirstOrLastElement?: boolean;
}

export const StyledNav = styled.nav``;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: none;
  margin: ${({ isFirstOrLastElement }) => (isFirstOrLastElement ? '0 1.6rem' : '0 1.6rem')};
  color: ${({ isFirstOrLastElement, isSelected }) =>
    isSelected ? (isFirstOrLastElement ? colors.gray400 : colors.primary) : colors.gray500};
  border: none;
`;
