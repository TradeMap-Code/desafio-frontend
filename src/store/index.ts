import { combineReducers, createStore } from "redux";
import { favoriteReducer } from "./favorite/reducers";
import { tabReducer } from "./tab/reducers";
import { themeReducer } from "./theme/reducers";
import storeSynchronize from "redux-localstore";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  tab: tabReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);
storeSynchronize(store);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
