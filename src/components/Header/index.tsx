import React from 'react';
import Logo from '../Logo';
import styles from './Header.module.css';
import { Input } from '../ui';
import CartIndicator from './CartIndicator';
import UserIndicator from './UserIndicator';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <Input placeholder="Search" />
      <div className={styles.indicatorsWrapper}>
        <CartIndicator />
        <UserIndicator />
      </div>
    </div>
  );
};

export default Header;
