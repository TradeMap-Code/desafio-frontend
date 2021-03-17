export const INITIAL_STATE = {
  stocks: [],
  favourites: [],
  priceOrder: '',
  variationOrder: '',
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
        favourites: state.favourites.concat(
          state.stocks.find((item) => item.stock === action.value)
        ),
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav) => fav.stock !== action.value
        ),
      };
    case 'SET_PRICE_ORDER': {
      const newState = {
        ...state,
        priceOrder: action.value.order,
        variationOrder: 'asc',
      };
      console.log(action.value.sortedStocks);
      return action.value.page === 'home'
        ? { ...newState, stocks: action.value.sortedStocks }
        : { ...newState, favourites: action.value.sortedStocks };
    }
    case 'SET_VARIATION_ORDER': {
      const newState = {
        ...state,
        priceOrder: 'asc',
        variationOrder: action.value.order,
      };

      return action.value.page === 'home'
        ? { ...newState, stocks: action.value.sortedStocks }
        : { ...newState, favourites: action.value.sortedStocks };
    }
    default:
      return state;
  }
};

export default stockReducer;
