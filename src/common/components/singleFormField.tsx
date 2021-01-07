import React from 'react';

import { Label } from 'common/styles/SingleFormField';
import { SingleFormFieldWrapper } from '../styles/SingleFormField';

interface SingleFormFieldProps {
  fieldName: string;
  children: JSX.Element;
  label?: string;
}

export const SingleFormField: React.FunctionComponent<SingleFormFieldProps> = ({
  fieldName,
  children,
  label,
}) => (
  <SingleFormFieldWrapper>
    <Label>{label || fieldName}</Label>
    {children}
  </SingleFormFieldWrapper>
);
