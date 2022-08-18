import React from 'react';
import { ui } from '../../components';
import styles from './UiTest.module.css';

const UiTest: React.FC = () => {
  return (
    <div className={styles.root}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <ui.Button>Hello world!</ui.Button>
        <ui.Button variant="small">Hello world!</ui.Button>
        <ui.Button disabled>Hello world!</ui.Button>
      </div>
      <ui.Input placeholder="Placeholder" />
    </div>
  );
};

export default UiTest;
