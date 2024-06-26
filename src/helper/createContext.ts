import { createContext } from "react";

interface Context {
  isHiddenNavigation: boolean;
  setIsHiddenNavigations: React.Dispatch<React.SetStateAction<boolean>>;
}
export const appStateContext = createContext<Context | null>(null);
