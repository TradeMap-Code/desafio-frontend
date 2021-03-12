
export function addStockToFavorite(stock: string) {
  return {
    type: 'ADD_STOCK_TO_FAVORITES',
    payload: {
      stock,
    },
  };
}

export function updatePriceOrder(inverseOrder: boolean) {
  return {
    type: 'UPDATE_PRICE_ORDER',
    payload: {
      inverseOrder,
    },
  };
}

export function updateVariationOrder(inverseOrder: boolean) {
  return {
    type: 'UPDATE_VARIATION_ORDER',
    payload: {
      inverseOrder,
    },
  };
}