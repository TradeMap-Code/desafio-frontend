import { combineReducers, createStore } from "redux";
import { favoriteReducer } from "./favorite/reducers";
import { tabReducer } from "./tab/reducers";
import { themeReducer } from "./theme/reducers";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  tab: tabReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
