import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        className="px-5 py-2 border border-red-500 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default UseStateHook;
