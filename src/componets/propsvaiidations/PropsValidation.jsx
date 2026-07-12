import PropTypes from "prop-types";

const Employee = ({ name, age, salary, isActive }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </>
  );
};

Employee.propsType = {
  name: PropTypes.number,
  age: PropTypes.number,
  salary: PropTypes.number,
  isActive: PropTypes.bool,
};

export default Employee;

import React from "react";
import PropTypes from "prop-types";

const User = ({ name, age }) => {
  return (
    <>
      <h1>{`Welcome, ${name}`}</h1>
      <h2>{`Age, ${age}`}</h2>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
