import styles from '../styles/components/StockList.module.css';
import stocks from '../stocks.json';
import { StockBlock } from './StockBlock';

export function StockList() {
  const listedStocks = stocks.map((stock) => {
    return (
      <div className={styles.stockListed}>
      <StockBlock
        key={stock.company}
        stockName={stock.stock}
        price={stock.price}
        variation={stock.variation}
        chart={stock.chart}
      />
      </div>
    );
  });
  return <div className={styles.stockGroup}>{listedStocks}</div>;
}
