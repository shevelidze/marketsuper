import React, { useEffect, useCallback, useState } from 'react';
import Logo from '../Logo';
import styles from './Header.module.css';
import { Input } from '../ui';
import CartIndicator from './CartIndicator';
import UserIndicator from './UserIndicator';
import joinClasses from '../../utils/joinClasses';

const Header: React.FC = () => {
  const [isFloating, setIsFloationg] = useState(false);

  const onScroll = useCallback(() => {
    setIsFloationg(window.scrollY !== 0);
  }, [setIsFloationg]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div
      className={joinClasses({
        [styles.root]: true,
        [styles.floating]: isFloating,
      })}
    >
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
