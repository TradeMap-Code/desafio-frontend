import IStock from "../../interfaces/IStock";

export interface FavoriteState {
  stocks: IStock[];
}

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  stock: IStock;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  stock: IStock;
}

export type FavoriteActionTypes = AddFavoriteAction | RemoveFavoriteAction;
