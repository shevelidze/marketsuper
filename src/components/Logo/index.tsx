import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './logo.svg';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
