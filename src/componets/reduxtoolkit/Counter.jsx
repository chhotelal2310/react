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
