import { SWITCH_THEME, ThemeActionTypes, ThemeType } from "./types";

export function switchTheme(theme: ThemeType): ThemeActionTypes {
  return {
    type: SWITCH_THEME,
    theme,
  };
}
