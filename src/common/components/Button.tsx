import React from 'react';

import { colors } from 'core/variablesConfig';
import { StyledButton } from '../styles/Button';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  isFilled?: boolean;
  width?: string | number;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  isFilled = true,
  disabled = false,
  width = 20,
}) => {
  return (
    <StyledButton
      isFilled={isFilled}
      disabled={disabled}
      widthInPercents={width}
      white={colors.white}
      primary={colors.primary}
      secondary={colors.primaryDark}
      disabledColor={colors.gray400}
    >
      {children}
    </StyledButton>
  );
};
