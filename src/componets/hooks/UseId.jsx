/*Flow:

Component Render
       │
       ▼
useId() Called
       │
       ▼
React Generates Unique ID
       │
       ▼
ID Stored For This Component
       │
       ▼
Returned to Variable
       │
       ▼
Used in JSX

*/

//----------------------------- Example-1----------------------------/
/*
import React, { useId } from "react";

const UseId = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Email</label>

      <input id={id} type="email" />
    </>
  );
};

export default UseId;

/*

/*
Note:
Internally:
<label for=":r0:">
<input id=":r0:"></input>
*/


//----------------------------- Example-2----------------------------/

/*
import { useId } from "react";

function UseId() {

  const nameId = useId();
  const emailId = useId();

  return (
    <>
      <label htmlFor={nameId}>
        Name
      </label>

      <input id={nameId} />

      <label htmlFor={emailId}>
        Email
      </label>

      <input id={emailId} />
    </>
  );
}

export default UseId

*/

/*
Generated IDs:
:r0:
:r1:
*/

// Multiple Components
function UseId() {

 const id = useId();

 return (
   <>
      <label htmlFor={id}>Name</label>
      <input id={id}/>
   </>
 );
}

export default UseId;

/*

<InputField />
<InputField />
<InputField />

Generated:
Component 1

:r0:

Component 2

:r1:

Component 3

:r2:
*/