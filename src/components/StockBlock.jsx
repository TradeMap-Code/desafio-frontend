import styles from '../styles/components/StockBlock.module.css';

export function StockBlock({ stockName, price, variation }) {
  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockHeader}>
        <h1>{stockName}</h1>
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
