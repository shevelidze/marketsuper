import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'big' | 'small';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'big',
  ...buttonProps
}) => {
  return (
    <button
      className={[styles.root, styles[variant], styles[size]].join(' ')}
      {...buttonProps}
    />
  );
};

export default Button;
