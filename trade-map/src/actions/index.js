export const dataFetched = (data) => {
  return {
    type: 'DATA_FETCHED',
    value: data,
  };
};

export const addToFavourites = (stock) => {
  return {
    type: 'ADD_TO_FAVOURITES',
    value: stock,
  };
};

export const removeFromFavourites = (stock) => {
  return {
    type: 'REMOVE_FROM_FAVOURITES',
    value: stock,
  };
};

export const setPriceOrder = (order) => {
  return {
    type: 'SET_PRICE_ORDER',
    value: order,
  };
};

export const setVariationOrder = (order) => {
  return {
    type: 'SET_VARIATION_ORDER',
    value: order,
  };
};
