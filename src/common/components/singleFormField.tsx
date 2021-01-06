import React from 'react';

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
  <div>
    <label>
      {label || fieldName}:{children}
    </label>
  </div>
);
