import styles from '../styles/components/StockList.module.css';
import { StockBlock } from './StockBlock';

export function StockList({ stocks, onButtonClick }) {
  const listedStocks = stocks.map((stock) => {
    return (
      <div key={stock.company} className={styles.stockListed}>
        <StockBlock
          company={stock.company}
          stockName={stock.stock}
          price={stock.price}
          variation={stock.variation}
          chart={stock.chart}
          onButtonClick={onButtonClick}
        />
      </div>
    );
  });
  return (
    <div className={styles.listedStockPage}>
      <div className={styles.stockGroup}>{listedStocks}</div>
    </div>
  );
}
