import { Reducer } from "redux";
import { IStocks } from "../../../pages/List";

export interface IFavoriteState {
  stocks: IStocks[]
}

const INITIAL_STATE: IFavoriteState = {
  stocks: []
}

const favorites:Reducer<IFavoriteState> = (state=INITIAL_STATE,action) => {

  switch(action.type) {
    case 'ADD_STOCK_TO_FAVORITES': {
      const stocks: IStocks[] = action.payload.stock;

      return {
        stocks
      }
    }

    default: {
      return state;
    }

  }

}

export {favorites}
