import React from 'react';

export type SelectValueSetter = (
  value: any,
  headChildren: React.ReactNode
) => void;

const SelectContext = React.createContext<SelectValueSetter>(() => {
  throw new Error('Failed to find select ancestor.');
});

export default SelectContext;
