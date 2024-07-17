import { createContext, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

const initialState = {
  userReducers: {
    user: "None",
  },
  dataReducers: {},
  formReducers: {},
};

export const Context = createContext(initialState);

const init = (initialState) => {
  const { userReducers, dataReducers, formReducers } = initialState;

  return {
    userReducers,
    formReducers,
    dataReducers,
  };
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState, init);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
