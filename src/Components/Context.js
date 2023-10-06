import { createContext, useContext } from "react";
export const MyProvider = createContext({});
export const useConsumer = () => useContext(MyProvider);
