import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const ParentAB = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <ChildA name={name} setName={setName}/>
            <ChildB name={name}/>
        </div>
    )
}

export default ParentAB

/********************************* ChildA ********************************/
import React from "react";

const ChildA = ({ name, setName }) => {
  return (
    <div>
      <p> Inside the ChildA: {name || "--"}</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="border"
      />
    </div>
  );
};

export default ChildA;




/********************************* ChildB ********************************/
import React from "react";

const ChildB = ({ name }) => {
  return <div>Insdie the childB: {name || "--"}</div>;
};

export default ChildB;
