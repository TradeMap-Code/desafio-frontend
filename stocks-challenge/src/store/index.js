import { createStore } from "redux";

const INITIAL_STATE = {
  favorite: new Array(),
  visualize: {},
};

function stocks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE_STOCK":
      return { ...state, favorite: [...state.favorite, action.stock] };
    case "ADD_VISUALIZE_STOCK":
      return { ...state, visualize: { ...state.visualize, ...action.stock } };
    default:
      return state;
  }
}

const store = createStore(stocks);

export default store;
