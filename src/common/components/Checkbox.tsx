import React from 'react';

import { StyledCheckbox, StyledLabel, StyledCheckmark } from 'common/styles/Checkbox';
import { ReactComponent as Active } from '../assets/active.svg';

interface CheckboxProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({ label, isActive, onClick }) => (
  <StyledLabel onClick={onClick}>
    {!isActive ? (
      <StyledCheckbox />
    ) : (
      <StyledCheckmark>
        <Active />
      </StyledCheckmark>
    )}
    {label}
  </StyledLabel>
);
