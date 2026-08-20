/*

NOTE: For larger state management, Context is often combined with useReducer.

Example:Context and useReducer

/--------------------------------Inital Value------------------------------------------/
const initialState = {
  count: 0,
};

/-------------------------------Context Creation-----------------------------------------/
const CounterContext = createContext();

/---------------------------------Reduce Function-----------------------------------------/
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

/-------------------------------------------Provider----------------------------------------/
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



/----------------------------------------------- Consumer---------------------------------------------/
import { useCounter } from "./CounterProvider";

const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <>
      <h1 className="text-center text-xl font-semibold">
        Count is: {state.count}
      </h1>

      <div className="w-full flex justify-center gap-3.5 mt-5">
        <button
          className="border rounded-lg px-14 py-1.5 cursor-pointer bg-green-500"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>

        <button
          className="border rounded-lg px-14 py-1.5 cursor-pointer bg-red-500"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;


/------------------------------------------Working Flow-------------------------------------/
FLOW:

              USER CLICKS "+"
                    │
                    ▼
        onClick={() => dispatch(...)}
                    │
                    ▼
          dispatch({
            type: "INCREMENT"
          })
                    │
                    │
                    ▼
          ┌─────────────────┐
          │      React      │
          │                 │
          │ knows current   │
          │ state already   │
          └────────┬────────┘
                   │
                   │
                   ▼
          ReducerFn(
             currentState,
             action
          )
                   │
                   ▼
       ReducerFn(
         { count: 0 },
         { type: "INCREMENT" }
       )
                   │
                   ▼
         switch(action.type)
                   │
                   ▼
             "INCREMENT"
                   │
                   ▼
       return {
         ...state,
         count: state.count + 1
       }
                   │
                   ▼
             { count: 1 }
                   │
                   ▼
          React updates state
                   │
                   ▼
             Component
             re-renders
                   │
                   ▼
             Count is: 1

*/
