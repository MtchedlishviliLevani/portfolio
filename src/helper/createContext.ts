import { createContext } from "react";

interface Context {
  isInnerWidthMore768: boolean | null;
  setIsInnerWidthMore768: React.Dispatch<React.SetStateAction<boolean | null>>;
  setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNavigation: boolean;
}
export const appStateContext = createContext<Context | null>(null);
