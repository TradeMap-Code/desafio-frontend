import { Reducer } from 'redux';
import Stocks from '../../../data/stocks.json';

import { State } from './types';

const INITIAL_STATE: State = {
  priceOrderInverse: false,
  variationOrderInverse: false,
  favoritesStocks: ['PETR4'],
  stocks: Stocks,
};

const stateReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  
    switch(action.type) {
      case 'ADD_STOCK_TO_FAVORITES': {
        const stock = action.payload;
        const { favoritesStocks } = state
        favoritesStocks.push(stock);
        return { ...state, favoritesStocks: favoritesStocks}
      }
      case 'UPDATE_PRICE_ORDER': {
        const inverseOrder = action.payload;
        if (inverseOrder) {
          const sortedStocks = state.stocks.sort((stockA, stockB) => stockB.price - stockA.price);
          return { ...state, priceOrderInverse: inverseOrder, stocks: sortedStocks};
        } 
        const sortedStocks = state.stocks.sort((stockA, stockB) => stockA.price - stockB.price);
        return { ...state, priceOrderInverse: inverseOrder, stocks: sortedStocks};
      }
      case 'UPDATE_VARIATION_ORDER': {
        const inverseOrder = action.payload;
        if (inverseOrder) {
          const sortedStocks = state.stocks.sort((stockA, stockB) => stockB.variation - stockA.variation);
          return { ...state, variationOrderInverse: inverseOrder, stocks: sortedStocks};
        } 
        const sortedStocks = state.stocks.sort((stockA, stockB) => stockA.variation - stockB.variation);
        return { ...state, variationOrderInverse: inverseOrder, stocks: sortedStocks};
      }
      default: {
        return state;
      }
    }
};

export default stateReducer;