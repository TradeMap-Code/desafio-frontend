import styles from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <a href='https://trademap.com.br/' target='_blank' rel='noreferrer'>
            <b>TradeMap</b>
          </a>
        </div>
        <div className={styles.navOptions}>
          <ul>
            <li>
              <Link to='/'>Lista de Ações</Link>
            </li>
            <li>
              <Link to='/favoritos'>Ações Favoritas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
