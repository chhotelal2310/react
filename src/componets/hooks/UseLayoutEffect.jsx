/*--------------------Real-Life Example 1(Auto Focus Input)---------------------------*/
// import React from "react";
// import { useRef, useLayoutEffect } from "react";

// const UseLayoutEffect = () => {
//   const inputRef = useRef();

//   useLayoutEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} />;
// };

// export default UseLayoutEffect;

/*--------------------Real-Life Example 2(Measure Width)---------------------------*/
import { useRef, useLayoutEffect } from "react";

function UseLayoutEffect() {

  const boxRef = useRef();

  useLayoutEffect(() => {

    console.log(boxRef.current.offsetWidth);

  }, []);

  return (
    <div ref={boxRef}>
      Hello
    </div>
  );
}

export default UseLayoutEffect;

