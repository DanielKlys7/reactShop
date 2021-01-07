import styled from 'styled-components';

import { breakpoints, colors } from 'core/variablesConfig';

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  margin-right: 1.6rem;

  @media (min-width: ${breakpoints.desktop}) {
    margin-left: 2.4rem;
    margin-left: 5%;
  }
`;

export const StyledCheckbox = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray500};
  box-sizing: border-box;
  border-radius: 4px;
`;

export const StyledCheckmark = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLabelText = styled.span`
  margin-left: 0.8rem;
`;
