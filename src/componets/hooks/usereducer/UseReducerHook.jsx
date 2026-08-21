import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
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

    case "RESET":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2> Count: {state.count}</h2>

      <button
        className="bg-amber-500 border rounded-lg px-10 py-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="bg-green-500 border rounded-lg px-10 py-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        className="bg-purple-500 border rounded-lg px-10 py-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </>
  );
};

export default UseReducerHook;
