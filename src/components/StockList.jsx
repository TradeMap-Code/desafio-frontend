import styles from '../styles/components/StockList.module.css';
import { StockBlock } from './StockBlock';

export function StockList({
  stocks,
  onButtonClick,
  displayFilteredStockList,
  buttonFavText,
}) {
  const filteredStocks = displayFilteredStockList(stocks);

  const listedStocks = filteredStocks.map((stock) => {
    return (
      <div key={stock.company} className={styles.stockListed}>
        <StockBlock
          company={stock.company}
          stockName={stock.stock}
          price={stock.price}
          variation={stock.variation}
          chart={stock.chart}
          onButtonClick={onButtonClick}
          buttonFavText={buttonFavText}
        />
      </div>
    );
  });
  return (
    <div className={styles.stockListWrapper}>
      <div className={styles.stockGroup}>{listedStocks}</div>
    </div>
  );
}
