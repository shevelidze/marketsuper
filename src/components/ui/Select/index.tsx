import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../../icons/arrow.svg';
import SelectContext, { SelectValueSetter } from './SelectContext';
import styles from './Select.module.css';

export interface SelectProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void;
  head: React.ReactNode | ((head: React.ReactNode) => React.ReactNode);
}

const Select: React.FC<SelectProps> = ({
  children,
  onValueChange,
  className,
  head,
  ...rootProps
}) => {
  const [value, setValue] = useState<string>('');
  const [bodyIsShown, setBodyIsShown] = useState<boolean>(false);
  const [selectedChildren, setSelectedChildren] =
    useState<React.ReactNode>(null);

  const setValueWithCallback: SelectValueSetter = (value, headChildren) => {
    onValueChange?.(value);
    setBodyIsShown(false);
    setValue(value);
    setSelectedChildren(headChildren);
  };

  const rootClassList = [styles.root];

  if (className !== undefined) rootClassList.push(className);

  return (
    <SelectContext.Provider value={setValueWithCallback}>
      <div className={rootClassList.join(' ')} {...rootProps}>
        <div
          className={styles.head}
          onClick={setBodyIsShown.bind(null, !bodyIsShown)}
        >
          <div>
            {typeof head === 'function'
              ? head(selectedChildren)
              : selectedChildren || head}
          </div>
          <Arrow
            className={[
              styles.arrow,
              bodyIsShown ? styles.up : styles.down,
            ].join(' ')}
          />
        </div>
        {bodyIsShown && <div className={styles.body}>{children}</div>}
      </div>
      <input value={value} type="hidden" />
    </SelectContext.Provider>
  );
};

export default Select;
export { SelectContext };
