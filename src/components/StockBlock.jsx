import styles from '../styles/components/StockBlock.module.css';
import { FavoriteButton } from './FavoriteButton';

export function StockBlock({
  stockName,
  price,
  variation,
  onButtonClick,
  company,
}) {
  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockHeader}>
        <h1>{stockName}</h1>
        <FavoriteButton onButtonClick={onButtonClick} company={company} />
      </div>
      <div className={styles.stockChart}></div>
      <div className={styles.stockFooter}>
        <ul>
          <li>Variação: {variation}%</li>
          <li>Preço: R$ {price}</li>
        </ul>
      </div>
    </div>
  );
}
