import styled, { keyframes } from 'styled-components';

import { colors } from 'core/variablesConfig';

const spinAnimation = keyframes`
0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}
`;

export const StyledDiv = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 4px solid ${colors.gray200};
  border-bottom-color: ${colors.primary};
  will-change: transform;
  animation: ${spinAnimation} 1s linear infinite;
`;
