import { TabActionTypes, TabState } from "./types";

const initialState: TabState = {
  tab: "list",
};

export function tabReducer(
  state = initialState,
  action: TabActionTypes
): TabState {
  switch (action.type) {
    case "GOTO_TAB":
      return {
        tab: action.tab,
      };
    default:
      return state;
  }
}
