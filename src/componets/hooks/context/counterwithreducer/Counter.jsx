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
