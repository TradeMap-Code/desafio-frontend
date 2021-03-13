import React from 'react';
import { useHistory } from 'react-router-dom'
import { FiHeart, FiList } from 'react-icons/fi';


import styles from '../styles/components/Header.module.css';
import Button from './Button';

const Header: React.FC = () => {

  const history = useHistory();

  return (
    <header className={`${styles.header}`}>
      <div>
        Trade Map
      </div>

      <div>
        <div>
          <Button
            disabled={history.location.pathname === '/' || false}
            className={history.location.pathname === '/' ? styles.buttonDisabled : undefined}
            onClick={() => history.push('/')}
          >
            List
            <FiList />
          </Button>
          <Button
            disabled={history.location.pathname === '/favorites' || false}
            className={history.location.pathname === '/favorites' ? styles.buttonDisabled : undefined}
            onClick={() => history.push('/favorites')}
          >
            Favorites
            <FiHeart />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;