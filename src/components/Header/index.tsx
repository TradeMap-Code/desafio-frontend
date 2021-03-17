/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
} from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <nav>
          <Link to="/">Lista de Ações</Link>
          <Link to="/favorites">Ações favoritas</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
