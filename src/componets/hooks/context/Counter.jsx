import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Counter;