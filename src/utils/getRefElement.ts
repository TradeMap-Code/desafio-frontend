import { RefObject } from "react";

const getRefElement = <T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null => {
  if (element && "current" in element) {
    return element.current;
  }

  return element;
};

export default getRefElement;
