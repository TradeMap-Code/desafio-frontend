import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/modules/state/types';
import { FiHeart, FiList, FiMoon, FiSun } from 'react-icons/fi';


import styles from '../styles/components/Header.module.css';
import Button from './Button';

const Header: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useSelector((state: State) => state.theme);

  function handleChangeTheme(newTheme: string) {
    dispatch({
      type: 'UPDATE_THEME',
      payload: newTheme 
    });
  }

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
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
          <Button onClick={() => handleChangeTheme(theme === 'themeDark' ? 'themeLight' : 'themeDark')}>
            {theme === 'themeDark' ? 'Theme Light' : 'Theme Dark'}
            {theme === 'themeDark' ? <FiSun /> : <FiMoon />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;