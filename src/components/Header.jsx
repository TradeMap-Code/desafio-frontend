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
            <li onClick={() => setActivePage('list')}>Lista</li>
            <li onClick={() => setActivePage('favorites')}>Favotiros</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
