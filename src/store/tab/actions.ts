import { GOTO_TAB, TabActionTypes, TabType } from "./types";

export function gotoTab(tab: TabType): TabActionTypes {
  return {
    type: GOTO_TAB,
    tab,
  };
}
