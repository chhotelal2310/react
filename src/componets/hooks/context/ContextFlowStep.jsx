/*

Step 1 — Create Context


import { createContext } from "react";

const UserContext = createContext();

export default UserContext;


Step 2 — Provide data

import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Chhotelal",
    role: "Developer"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;



Step 3 — Consume using useContext

import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return <h2>Hello {user.name}</h2>;
}



/---------------------------Most important points to remember----------------------------/
createContext() → creates Context.
Provider → provides the value.
useContext() → consumes/reads the value.
Helps avoid prop drilling.
Context itself is not state management.
Nearest Provider wins.
Context can contain state, functions, objects, etc.
Changing the context value can cause consumers to re-render.
Don't put everything into one huge Context.
Common uses: theme, user/auth, language, settings, cart.
*/