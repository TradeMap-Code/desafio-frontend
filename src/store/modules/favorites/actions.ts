import { IStocks } from "../../../pages/List";

export function addStockToFavorites (stock: IStocks[]) {
  return {
    type: 'ADD_STOCK_TO_FAVORITES',
    payload: {
      stock,
    }
  }
}
