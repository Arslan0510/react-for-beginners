import React, { useState } from "react";

const ObjectState = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
  });
  console.log("State", state);
  return (
    <div>
      <h2>{state.name}</h2>
      <h2>{state.email}</h2>
      <h2>{state.address}</h2>
      <button
        className="btn btn-primary btn-sm"
        onClick={(event) => setState({ ...state, email: "qwerty@gmail.com", address: "Islamabad" })}
      >
        Change State
      </button>
    </div>
  );
};

export default ObjectState;
