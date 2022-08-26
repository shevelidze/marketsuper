import React from 'react';
import IndicatorProps from '../IndicatorProps';
import UserIcon from './user.svg';

const Unauthorized: React.FC<IndicatorProps> = ({ setMenuChildren }) => {
  return <UserIcon onClick={setMenuChildren.bind(null, 'Unauthorized menu')} />;
};

export default Unauthorized;
