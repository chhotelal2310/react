/*************************** useEffect Wihtout Dependancy array *****************************/

/*import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect is run: ${count}`);
  });

  return (
    <div>
      <h1>{`useEffect is run: ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffectHook;

Note: 
1.This effect runs after first render.
2.This effect runs after every re-render.
*/

/*************************** useEffect with empty dependency array [] *****************************/
import React from "react";

const useEffectHook = () => {
  return <div>useEffectHook</div>;
};

export default useEffectHook;
