import { combineReducers, createStore } from "redux";
import { favoriteReducer } from "./favorite/reducers";
import { tabReducer } from "./tab/reducers";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  tab: tabReducer,
});

const store = createStore(rootReducer);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
