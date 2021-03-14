export const INITIAL_STATE = {
  stocks: [],
  favorites: [],
};
const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_FETCHED':
      return {
        ...state,
        stocks: action.value,
      };
    default:
      return state;
  }
};

export default stockReducer;
