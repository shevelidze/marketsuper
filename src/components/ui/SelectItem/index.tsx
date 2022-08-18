import React, { useContext } from 'react';
import SelectContext from '../Select/SelectContext';
import styles from './SelectItem.module.css';

export interface SelectItemProps extends React.PropsWithChildren {
  value: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => {
  const setValue = useContext(SelectContext);
  return (
    <div onClick={setValue.bind(null, value, children)} className={styles.root}>
      {children}
    </div>
  );
};

export default SelectItem;
