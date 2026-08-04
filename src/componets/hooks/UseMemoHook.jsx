import React, { useState, useMemo } from "react";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Johnny" },
];


import React from 'react'

const UseMemoHook = () => {
   const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default UseMemoHook

/*
Working Flow:


┌──────────────────┐
│ Component Render │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  useCallback()   │
└────────┬─────────┘
         │
         ▼
┌────────────────────────┐
│ Dependencies Changed?  │
└───────┬────────────────┘
        │
   ┌────┴─────┐
   │          │
  Yes        No
   │          │
   ▼          ▼
┌──────────┐ ┌─────────────────┐
│ Create   │ │ Return Cached   │
│ Function │ │ Function         │
└────┬─────┘ └────────┬────────┘
     │                │
     ▼                │
┌──────────────┐      │
│ Store Cache  │      │
└────┬─────────┘      │
     └──────────┬─────┘
                ▼
      ┌─────────────────┐
      │ Function Ready  │
      └─────────────────┘


      Component Render
        │
        ▼
useCallback()

        │
        ▼
Check Dependency Array

        │
   ┌────┴────┐
   │         │
 Changed?   No
   │         │
 Yes        ▼
   │     Return Cached
   ▼      Function
Create New
Function
   │
   ▼
Store in Cache

      */

/*
Note:
If a function is included in the useEffect dependency array, React compares its reference, not its code.
 useCallback keeps the function reference stable, preventing unnecessary useEffect executions until its dependencies change.
 */

 /*
 Example:
 Example: useCallback in useEffect Dependencies
 1.Without useCallback
 import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const fetchData = () => {
    console.log("Fetching data...");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

Note:1
a.What happens?
b.Initial render → fetchData is created.
c.useEffect runs.
d.Click the button → App re-renders.
e.A new fetchData function is created.
f.Since fetchData is in the dependency array, React thinks it changed.
g.useEffect runs again, even though the function logic is the same.


2.With useCallback
import { useState, useEffect, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log("Fetching data...");
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


Note2:
a.What happens?
b.Initial render → fetchData is created and cached.
c.useEffect runs once.
d.Click the button → App re-renders.
e.fetchData reference does not change because of useCallback.
f.Dependency [fetchData] is unchanged.
g.useEffect does not run again.

 */