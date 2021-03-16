import reducer from '../../redux/modules/state/reducer';
import Stocks from '../../data/stocks.json';

const initialState = {
  priceOrderInverse: false,
  variationOrderInverse: false,
  favoritesStocks: [],
  stocks: Stocks,
  theme: 'themeDark'
}

describe('State Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  
  it('should handle ADD_STOCK_TO_FAVORITES', () => {
    expect(
      reducer(initialState, { 
        type: 'ADD_STOCK_TO_FAVORITES', payload: 'PETR4'
      })).toEqual({
        ...initialState,
        favoritesStocks: ['PETR4']
      })
  });

  it('should handle REMOVE_STOCK_FROM_FAVORITES', () => {
    expect(
      reducer({
        ...initialState,
        favoritesStocks: ['PETR4']
      }, { 
        type: 'REMOVE_STOCK_FROM_FAVORITES', payload: 'PETR4'
      })).toEqual({
        ...initialState,
        favoritesStocks: []
      })
  });

  it('should handle UPDATE_PRICE_ORDER', () => {
    expect(
      reducer(initialState, { 
        type: 'UPDATE_PRICE_ORDER', payload: true
      })).toEqual({
        ...initialState,
        priceOrderInverse: true
      })
  });

  it('should handle UPDATE_VARIATION_ORDER', () => {
    expect(
      reducer(initialState, { 
        type: 'UPDATE_VARIATION_ORDER', payload: true
      })).toEqual({
        ...initialState,
        variationOrderInverse: true
      })
  });

  it('should handle UPDATE_THEME', () => {
    expect(
      reducer(initialState, { 
        type: 'UPDATE_THEME', payload: 'themeLight'
      })).toEqual({
        ...initialState,
        theme: 'themeLight'
      })
  });
})