export const INITIAL_STATE = {
  stocks: [],
  favourites: [],
  priceOrder: 'asc',
  variationOrder: 'asc',
};
const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_FETCHED':
      return {
        ...state,
        stocks: action.value,
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.concat(action.value),
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav !== action.value),
      };
    case 'SET_PRICE_ORDER':
      return {
        ...state,
        priceOrder: action.value,
        variationOrder: 'asc',
      };
    case 'SET_VARIATION_ORDER':
      return {
        ...state,
        variationOrder: action.value,
        priceOrder: 'asc',
      };
    default:
      return state;
  }
};

export default stockReducer;
