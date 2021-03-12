import styles from '../styles/components/FavoriteList.module.css';
import { StockList } from './StockList';

export function FavoriteList({ onButtonClick, favoriteStocks, onFilterSet }) {
  return (
    <div className={styles.listedFavoritePage}>
      <div className={styles.favoriteGroup}>
        <StockList
          onFilterSet={onFilterSet}
          stocks={favoriteStocks}
          onButtonClick={onButtonClick}
          buttonFavText={'remover'}
        />
      </div>
    </div>
  );
}
