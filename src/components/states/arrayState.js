import React, { useState } from "react";

const ArrayState = () => {
  const [state, setState] = useState(["Apple", "Banana", "Mango", "Orange", "PineApple"]);
  return (
    <div>
      {state.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button className="btn btn-danger btn-sm" onClick={(e) => setState([...state, "strawberry"])}>
        Change Array items
      </button>
    </div>
  );
};

export default ArrayState;
