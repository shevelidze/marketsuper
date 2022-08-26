import React from 'react';
import IndicatorProps from '../IndicatorProps';
import styles from './Authorized.module.css';

export interface AuthorizedProps extends IndicatorProps {
  firstName: string;
  lastName: string;
}

const Authorized: React.FC<AuthorizedProps> = ({
  firstName,
  lastName,
  setMenuChildren,
}) => {
  return (
    <>
      <div
        className={styles.root}
        onClick={setMenuChildren.bind(null, 'Authorized menu')}
      >
        <span>{firstName[0] + lastName[0]}</span>
      </div>
    </>
  );
};

export default Authorized;
