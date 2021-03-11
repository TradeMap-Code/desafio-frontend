import React, { ButtonHTMLAttributes } from 'react';

import styles from '../styles/components/Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({children, loading, ...rest}) => (
  <button type = "button" {...rest} className={styles.container}>
    {children}
  </button>
);

export default Button;