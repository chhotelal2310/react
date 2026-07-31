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

/********************************************* Fetching Data from API********************* */

import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [users, setUsers] = useState([]);
let count=0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // console.log(users, "users>>>>>>>>>>>>>>>>>>>>>>>>.");
  console.log(count, ">>>>>>>>>>>>>>>>>")

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
