import styles from '../styles/components/Header.module.css';

export function Header({ setActivePage }) {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <a href='https://trademap.com.br/'>
            <b>TradeMap</b>
          </a>
        </div>
        <div className={styles.navOptions}>
          <ul>
            <li>
              <a href='/' onClick={() => setActivePage('list')}>
                Lista de Ações
              </a>
            </li>
            <li>
              <a href='/' onClick={() => setActivePage('favorites')}>
                Ações Favoritas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
