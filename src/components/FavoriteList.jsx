import { StockList } from './StockList';

export function FavoriteList({
  onButtonClick,
  favoriteStocks,
  displayFilteredStockList,
}) {
  return (
    <div>
      <StockList
        displayFilteredStockList={displayFilteredStockList}
        stocks={favoriteStocks}
        onButtonClick={onButtonClick}
        buttonFavText={'remover'}
      />
    </div>
  );
}
