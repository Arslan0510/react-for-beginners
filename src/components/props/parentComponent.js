import React, { useState } from "react";
import ChildComponent from "./childComponent";

const ParentComponent = () => {
  const [state, setState] = useState("Parent is calling");
  return <ChildComponent name={state} changeState={(argument) => setState(argument)} />;
};

export default ParentComponent;
