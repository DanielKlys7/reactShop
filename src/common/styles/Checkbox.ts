import styled from 'styled-components';

import { colors } from 'core/variablesConfig';

export const StyledLabel = styled.label`
  font-size: 1.4em;
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray500};
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 8px;
`;

export const StyledCheckmark = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${colors.primary};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
