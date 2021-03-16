import { ThemeActionTypes, ThemeState } from "./types";
import { defineState } from "redux-localstore";

const defaultState: ThemeState = {
  theme: "black-theme",
};

const initialState: ThemeState = defineState(defaultState)("theme");

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
