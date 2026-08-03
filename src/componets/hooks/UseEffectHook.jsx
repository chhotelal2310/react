/*************************** useEffect Wihtout Dependancy array *****************************/

/*
import React, { useEffect, useState } from "react";

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
/*
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect is run: ${count}`);
    alert("Hello useEffect Hook")
  }, []);

  return (
    <div>
      <h1>{`useEffect is run: ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffectHook;

Note: This runs only once after the component appears on the screen.

*/

/*************************** useEffect with  dependency array *****************************/
/*
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect is run: ${count}`);
    alert("Hello useEffect Hook");
  }, [count]);

  return (
    <div>
      <h1>{`useEffect is run: ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffectHook;

Noate:
1.This effect runs after first render.
2.This effect runs again whenever dependancy array update.

*/

/********************************************* Fetching Data from API-1********************* */

// import { func } from "prop-types";
// import { useEffect, useState } from "react";

// const UseEffectHook = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// export default UseEffectHook;



/********************************************* Fetching Data from API-2********************* */
// import { useEffect } from "react";

// const UseEffectHook = () => {
//   useEffect(async () => {
//     const myFetchData = () => {
//       console.log("Hello i am a myFetchData");
//     };
//     myFetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//     </div>
//   );
// };

// export default UseEffectHook;


/********************************************* Fetching Data from API-3********************* */
// import { useEffect } from "react";

// const UseEffectHook = () => {
//   const [users, setUsers] = useState([]);

//  useEffect(async () => {
//   const response = await fetch(url);

//   const data = await response.json();

//   setUsers(data);
// }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// export default UseEffectHook;


// Note:
// What happens?

// React executes the callback.
// fetch() starts.
// await waits for the response.
// Data is fetched.
// setUsers() runs.
// But the callback still returns a Promise, so React shows a warning.

// The API call still works.

// The issue is not that async code can't run. The issue is that React expects a cleanup function, not a Promise.






/********************************************* Fetching Data from API-4********************* */
/*

import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UseEffectHook;
*/

// working flow of this code:
// Server → Sends JSON Data → fetch() → Promise → First .then(res) → Response Object → res.json() → Reads Response Body → Converts JSON Text → JavaScript Object/Array → Returns Promise → Second .then(data) → JavaScript Object/Array → setUsers(data)
/*
┌──────────────┐
│   Server     │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│ Sends JSON Data      │
│ (Response Body)      │
└──────┬───────────────┘
       │
       ▼
┌──────────────┐
│  fetch()     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Promise     │
└──────┬───────┘
       │
       ▼
┌────────────────┐
│ .then(res)     │
└──────┬─────────┘
       │
       ▼
┌────────────────────┐
│ Response Object    │
│ status             │
│ headers            │
│ body(JSON Text)    │
└──────┬─────────────┘
       │
       ▼
┌────────────────┐
│ res.json()     │
└──────┬─────────┘
       │
       ▼
┌────────────────────┐
│ Read Response     │
│ Body              │
└──────┬─────────────┘
       │
       ▼
┌─────────────────────────┐
│ JSON Text →             │
│ JavaScript Object/Array │
└──────┬──────────────────┘
       │
       ▼
┌────────────────┐
│ Promise        │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│ .then(data)    │
└──────┬─────────┘
       │
       ▼
┌────────────────────────┐
│ JavaScript Object/Array│
└──────┬─────────────────┘
       │
       ▼
┌────────────────┐
│ setUsers(data) │
└────────────────┘
*/

// Cleanupfunction example:How Cleanup Works?

/*
Example:1
useEffect(() => {

  console.log("Effect runs");

  return () => {
    console.log("Cleanup runs");
  };

}, []);

Flow:

Component Mounts
        ↓
useEffect runs
        ↓
"Effect runs" printed
        ↓
Component Unmounts
        ↓
Cleanup function runs
        ↓
"Cleanup runs" printed
*/

/*
Complete Lifecycle Flow

Component Mount
        ↓
useEffect runs
        ↓
Create subscription/timer/listener
        ↓
Component Updates
        ↓
Dependency changes
        ↓
Previous Cleanup runs
        ↓
New useEffect runs
        ↓
Component Unmount
        ↓
Final Cleanup runs

*/