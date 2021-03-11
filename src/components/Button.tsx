import React, { ButtonHTMLAttributes } from 'react';

import styles from '../styles/components/Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <button type = "button" {...rest} className={styles.container}>
    {children}
  </button>
);

export default Button;