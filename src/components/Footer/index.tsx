import React from 'react';
import Logo from '../Logo';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>
        <Logo />
        <div>Copyright © 2022 Marketsuper Inc.</div>
      </div>
      <div className={styles.section}>
        <div>Kyiv, Ukraine</div>
        <div>support@marketsuper.ua</div>
      </div>
    </div>
  );
};

export default Footer;
