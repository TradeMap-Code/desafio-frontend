import IStock from "../../interfaces/IStock";
import { ADD_FAVORITE, REMOVE_FAVORITE, FavoriteActionTypes } from "./types";

export function addFavorite(stock: IStock): FavoriteActionTypes {
  return {
    type: ADD_FAVORITE,
    stock,
  };
}

export function removeFavorite(stock: IStock): FavoriteActionTypes {
  return {
    type: REMOVE_FAVORITE,
    stock,
  };
}
