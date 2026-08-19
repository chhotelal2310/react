/*

NOTE: For larger state management, Context is often combined with useReducer.

Example:Context and useReducer

//Inital Value
const initialState = {
  count: 0,
};

//Reduce Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

//Provider
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
}

// Consumer:
function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      <h1>{state.count}</h1>

      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        +
      </button>
    </>
  );
}

*/
