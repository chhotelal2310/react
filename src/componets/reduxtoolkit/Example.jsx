/*-------------------------------------Complete Example---------------------------------*/
//step-1
/*
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;


//step-2

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

step-3

import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>

      <h2>Count: {count}</h2>

      <div className="flex gap-3.5">
        <button
          className="px-5 py-2 border rounded-lg text-center"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className="px-5 py-2 border rounded-lg text-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className="px-5 py-2 border rounded-lg text-center"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>

        <button
          className="px-5 py-2 border rounded-lg text-center"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;


*/