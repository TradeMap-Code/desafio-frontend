import { combineReducers, createStore } from "redux";
import { favoriteReducer } from "./favorite/reducers";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

const store = createStore(rootReducer);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
