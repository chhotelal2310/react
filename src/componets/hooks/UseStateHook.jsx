/******************************* Example-1 **********************************/

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

// Flow: User Click → setCount(newValue) → React Updates State → Component Re-renders → UI Updates

/**************************************** Example-3**********************************/
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     console.log("Before:", count);

//     setCount(count + 1);

//     console.log("After:", count);
//   };

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={increase}>
//         Increase
//       </button>
//     </>
//   );
// }

// Important Point
// What do you expect?

// Maybe

// Before: 0
// After: 1

// But actually you'll get
// Before: 0
// After: 0

// Explaination:
// It simply tells React

// "Please update this state."

// React schedules that update.

// After your function finishes,

// React updates the state

// and re-renders the component.
