import { ThemeActionTypes, ThemeState } from "./types";

const initialState: ThemeState = {
  theme: "black-theme",
};

export function themeReducer(
  state = initialState,
  action: ThemeActionTypes
): ThemeState {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
}
