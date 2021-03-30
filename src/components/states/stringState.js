import React, { useState } from "react";

// How to use states in Functional components
// In functional components we use hooks
// First hook is useState
const StringState = () => {
  const [state, setState] = useState("Welcome react!!");

  return (
    <div>
      <h3>{state}</h3>
      <button onClick={(event) => setState("State changed!!")}>Change State</button>
    </div>
  );
};

export default StringState;
