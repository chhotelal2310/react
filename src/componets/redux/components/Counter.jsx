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

