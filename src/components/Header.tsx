import React from 'react';


import styles from '../styles/components/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        Trade Map
      </div>

      <div />

      <div>
        <strong>List</strong>

        <div>
          <button>teste</button>
        </div>
      </div>
    </header>
  );
};

export default Header;