import { createContext } from "react";
import { Context } from "../types";
export const appStateContext = createContext<Context | null>(null);
