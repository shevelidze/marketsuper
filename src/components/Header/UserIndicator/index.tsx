import React, { useState } from 'react';
import { useAppSelector } from '../../../common/hooks';
import { selectUser } from '../../../slices/user';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';
import styles from './UserIndicator.module.css';

const UserIndicator: React.FC = () => {
  const user = useAppSelector(selectUser);

  const [menuChildren, setMenuChildren] = useState<React.ReactNode>(null);

  return (
    <button onBlur={setMenuChildren.bind(null, null)} className={styles.root}>
      {user ? (
        <Authorized
          firstName={user.firstName}
          lastName={user.lastName}
          setMenuChildren={setMenuChildren}
        />
      ) : (
        <Unauthorized setMenuChildren={setMenuChildren} />
      )}

      {menuChildren && <div className={styles.menu}>{menuChildren}</div>}
    </button>
  );
};

export default UserIndicator;
