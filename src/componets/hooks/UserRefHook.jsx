/*-------------------Example-1: Ref Doesn't Re-render------------------- */
/*
import React, { useRef } from "react";

const UserRefHook = () => {
  const countRef = useRef(0);

  console.log("Render");

  function increase() {
    countRef.current++;

    console.log(countRef.current);
  }
  return <button onClick={increase}>Increase</button>;
};

export default UserRefHook;
*/

/*-------------------Example-2: Accessing DOM Elements------------------- */

/*

import { useRef } from "react";

const UserRefHook = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();

    console.log(inputRef.current, "inputRef>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
     console.log(inputRef.current.focus(), "inputRef>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  }

  

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};
export default UserRefHook;

*/

/*
Flow:
    Input
      ▲
      │
ref={inputRef}
      │
      ▼
inputRef.current
      │
      ▼
HTMLInputElement
      │
      ▼
    focus()
    */

/*-------------------Example-3: Changing Input Value----------- */

/*
import { useRef } from "react";

const UserRefHook = () => {
  const inputRef = useRef();

  function fill() {
    inputRef.current.value = "Hello";
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={fill}>Fill</button>
    </>
  );
};
export default UserRefHook;

*/

/*-------------------Example-4 :Previous Value----------- */

import { useEffect, useRef, useState } from "react";

const UserRefHook = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h2>Previous: {previousCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};
export default UserRefHook;
