import React from 'react';

import { colors } from 'core/variablesConfig';
import { StyledButton } from '../styles/Button';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  isFilled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  isFilled = true,
  disabled = false,
  className,
  onClick,
}) => (
  <StyledButton
    onClick={onClick}
    className={className}
    isFilled={isFilled}
    disabled={disabled}
    white={colors.white}
    primary={colors.primary}
    secondary={colors.primaryDark}
    disabledColor={colors.gray400}
  >
    {children}
  </StyledButton>
);
