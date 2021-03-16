import { FavoriteActionTypes, FavoriteState } from "./types";
import { defineState } from "redux-localstore";

const defaultState: FavoriteState = {
  stocks: [],
};

const initialState: FavoriteState = defineState(defaultState)("favorite");

export function favoriteReducer(
  state = initialState,
  action: FavoriteActionTypes
): FavoriteState {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        stocks: [...state.stocks, action.stock],
      };
    case "REMOVE_FAVORITE":
      return {
        stocks: state.stocks.filter(
          (stock) => stock.stock !== action.stock.stock
        ),
      };
    default:
      return state;
  }
}
