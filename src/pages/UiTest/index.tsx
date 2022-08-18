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
      <ui.Select
        placeholder="Choose value"
        onValueChange={(value) => console.log(value)}
        head={(children) =>
          children ? <>Selected value: {children}</> : 'Select value'
        }
        style={{ width: 'max-content' }}
      >
        <ui.SelectItem value="1">First</ui.SelectItem>
        <ui.SelectItem value="2">Second</ui.SelectItem>
        <ui.SelectItem value="3">Third</ui.SelectItem>
      </ui.Select>
    </div>
  );
};

export default UiTest;
