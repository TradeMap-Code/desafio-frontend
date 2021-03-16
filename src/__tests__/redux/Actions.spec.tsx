import React from 'react';
import { addStockToFavorite, removeStockToFavorite, updatePriceOrder, updateTheme, updateVariationOrder } from '../../redux/modules/state/actions'; 

describe('state actions', () => {
  it('should create an action to add a stock to favorites', () => {
    const stock = 'PETR4';
    const expectedAction = {
      type: 'ADD_STOCK_TO_FAVORITES',
      payload: { stock }
    };
    expect(addStockToFavorite(stock)).toEqual(expectedAction);
  });

  it('should create an action to remove a stock from favorites', () => {
    const stock = 'PETR4';
    const expectedAction = {
      type: 'REMOVE_STOCK_FROM_FAVORITES',
      payload: { stock }
    };
    expect(removeStockToFavorite(stock)).toEqual(expectedAction);
  });

  it('should create an action to update price order', () => {
    const inverseOrder = true;
    const expectedAction = {
      type: 'UPDATE_PRICE_ORDER',
      payload: { inverseOrder }
    };
    expect(updatePriceOrder(inverseOrder)).toEqual(expectedAction);
  });

  it('should create an action to update variation order', () => {
    const inverseOrder = true;
    const expectedAction = {
      type: 'UPDATE_VARIATION_ORDER',
      payload: { inverseOrder }
    };
    expect(updateVariationOrder(inverseOrder)).toEqual(expectedAction);
  });

  it('should create an action to update application theme', () => {
    const theme = 'themeLight';
    const expectedAction = {
      type: 'UPDATE_THEME',
      payload: { theme }
    };
    expect(updateTheme(theme)).toEqual(expectedAction);
  });
  
});