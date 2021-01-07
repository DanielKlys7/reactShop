import styled from 'styled-components';
import Modal from 'react-modal';

import { colors, breakpoints } from 'core/variablesConfig';

Modal!.defaultStyles!.overlay!.backgroundColor = 'rgba(26, 27, 29, 0.9)';

export const StyledModal = styled(Modal)`
  background-color: ${colors.white};
  height: 70%;
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: ${breakpoints.desktop}) {
    width: 45%;
    height: 60%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 60%;

  @media (min-width: ${breakpoints.desktop}) {
    height: 65%;
  }
`;

export const Header = styled.p`
  font-size: 2.4rem;
  color: ${colors.gray500};
  margin: 1.6rem 1.6rem 0 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  color: ${colors.gray400};
  margin: 1.4rem 1.4rem 0 1.4rem;
`;
