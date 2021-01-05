import styled from 'styled-components';

interface StyledButtonProps {
  isFilled?: boolean;
  widthInPercents?: string | number;
  primary: string;
  secondary: string;
  white: string;
  disabledColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ isFilled, primary, white }) => (isFilled ? `${primary}` : `${white}`)};
  border-radius: 4px;
  color: ${({ isFilled, primary, white }) => (isFilled ? `${white}` : `${primary}`)};
  padding: 1.2em 0;
  border: ${({ isFilled, primary }) => (isFilled ? 'none' : `0.1em solid ${primary}`)};
  width: ${({ widthInPercents }) => `${widthInPercents}%`};
  transition: 0.3s;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: ${({ isFilled, secondary, white }) => isFilled ? `${secondary}` : `${white}`};
    color: ${({ isFilled, secondary, white }) => isFilled ? `${white}` : `${secondary}`};
    border: ${({ isFilled, secondary }) => isFilled ? 'none' : `0.1em solid ${secondary}`};
  }

  &:disabled {
    background-color: ${({ isFilled, disabledColor, white }) => isFilled ? `${disabledColor}` : `${white}`};
    color: ${({ isFilled, disabledColor, white }) => isFilled ? `${white}` : `${disabledColor}`};
    border: ${({ isFilled, disabledColor }) => isFilled ? 'none' : `0.1em solid ${disabledColor}`};
    cursor: default;
  }
`;
