import React, { createContext, useReducer } from "react";
import { useContext } from "react";

const initialState = {
  count: 0,
};

const CounterContext = createContext();

const ReducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFn, initialState);

  return (
    <CounterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  return context;
};
