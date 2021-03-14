export type TabType = "list" | "favorites";

export interface TabState {
  tab: TabType;
}

export const GOTO_TAB = "GOTO_TAB";

interface GotoTabAction {
  type: typeof GOTO_TAB;
  tab: TabType;
}

export type TabActionTypes = GotoTabAction;
