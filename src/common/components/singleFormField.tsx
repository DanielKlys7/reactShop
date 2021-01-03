import React from 'react';

interface SingleFormFieldProperties {
  fieldName: string;
  children: JSX.Element;
  label?: string;
}

export const SingleFormField = ({
  fieldName,
  children,
  label,
}: SingleFormFieldProperties) => (
  <div>
    <label>
      {label || fieldName}:{children}
    </label>
  </div>
);
