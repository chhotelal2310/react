import React from "react";

const ChildB = ({ name }) => {
  return <div>Insdie the childB: {name || "--"}</div>;
};

export default ChildB;
