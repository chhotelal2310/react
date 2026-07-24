import { useState } from "react";

const Hook1 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="bg-red-700">{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
export default Hook1;
