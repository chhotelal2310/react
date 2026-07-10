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
