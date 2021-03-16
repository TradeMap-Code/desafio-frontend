import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
      </ul>
      <div id="header"></div>
    </nav>
  );
};

export default Header;
