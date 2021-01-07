import styled from 'styled-components';

import { colors, breakpoints } from 'core/variablesConfig';
import { Button } from 'common/components';

interface ImageProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.white};
  margin: 16px 1.25%;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
    height: 50vh;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: 0.5% 1.25%;
    width: 22.5%;
    height: 40vh;
  }
`;

export const Image = styled.img<ImageProps>`
  height: 40%;
  filter ${({ isActive }) => (isActive ? 'none' : 'grayscale(100%)')}
`;

export const Header = styled.p`
  font-size: 1.4rem;
  color: ${colors.gray500};
  margin: 1.6rem 1.6rem 0 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: ${colors.gray400};
  margin: 1.4rem 1.4rem 0 1.4rem;
`;

export const DetailsButton = styled(Button)`
  width: calc(100% - 32px);
  margin: 18px 16px 24px 16px;
  align-self: start;
`;

export const PromoBanner = styled.span`
  display: block;
  width: 30%;
  height: 24px;
  background-color: ${colors.secondary};
  position: absolute;
  top: 1.6rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: center;
  color: ${colors.white};
`;
