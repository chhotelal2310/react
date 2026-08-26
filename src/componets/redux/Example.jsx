/*-----------------------------Step-1---------------------------------------*/
//defined the action
/*
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
*/


/*-----------------------------Step-2---------------------------------------*/
//create reducer
/*
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
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

export default counterReducer;
*/


/*-----------------------------Step-3---------------------------------------*/
//root reducer (it used for multiple reducer for real word application.)

/*

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

*/


/*------------------------------------Step-4-----------------------------------*/
//store

/*
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default store;

*/

/*------------------------------step-5---------------------------------------------*/
//Warrper
/*
 <Provider store={store}>
      <App />
    </Provider>

    */


/*------------------------------step-6---------------------------------------------*/
//usesage
/*

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../counterActions";

function Counter() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <button
      className="px-4 py-2 rounded-lg bg-green-500"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-red-500"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-yellow-500"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

*/