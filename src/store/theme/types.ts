export type ThemeType = "white-theme" | "black-theme";

export interface ThemeState {
  theme: ThemeType;
}

export const SWITCH_THEME = "SWITCH_THEME";

interface SwitchThemeAction {
  type: typeof SWITCH_THEME;
  theme: ThemeType;
}

export type ThemeActionTypes = SwitchThemeAction;
