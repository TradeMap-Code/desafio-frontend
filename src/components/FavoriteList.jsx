import { StockList } from './StockList';

export function FavoriteList({ onButtonClick, favoriteStocks, displayFilteredStockList }) {
  return (
    <div>
      <div>
        <StockList
          displayFilteredStockList={displayFilteredStockList}
          stocks={favoriteStocks}
          onButtonClick={onButtonClick}
          buttonFavText={'remover'}
        />
      </div>
    </div>
  );
}
