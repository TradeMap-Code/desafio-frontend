import { Reducer } from 'redux';
import Cookies from 'js-cookie';
import Stocks from '../../../data/stocks.json';

import { State } from './types';

const INITIAL_STATE: State = {
  priceOrderInverse: false,
  variationOrderInverse: false,
  favoritesStocks: Cookies.get('favoritesStocks') ? Cookies.getJSON('favoritesStocks') as string[] : [],
  stocks: Stocks,
};

const stateReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  
    switch(action.type) {
      case 'ADD_STOCK_TO_FAVORITES': {
        const stock = action.payload;
        const { favoritesStocks } = state
        favoritesStocks.push(stock);
        Cookies.set('favoritesStocks', favoritesStocks);
        return { ...state, favoritesStocks: favoritesStocks}
      }
      case 'REMOVE_STOCK_FROM_FAVORITES': {
        const stock = action.payload;
        const { favoritesStocks } = state
        const updateFavoriteStocks = favoritesStocks.filter(favoriteStock => favoriteStock !== stock);
        Cookies.set('favoritesStocks', updateFavoriteStocks);
        return { ...state, favoritesStocks: updateFavoriteStocks}
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