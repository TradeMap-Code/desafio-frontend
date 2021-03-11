import styles from '../styles/components/FavoriteList.module.css';
import { StockList } from './StockList';

export function FavoriteList({
  onButtonClick,
  favoriteStocks,
}) {
  return (
    <div className={styles.listedFavoritePage}>
      <div className={styles.favoriteGroup}>
        <StockList
          stocks={favoriteStocks}
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  );
}
