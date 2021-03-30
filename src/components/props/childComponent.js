import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h2>childComponent {props.name}</h2>
      <button className="btn btn-secondary btn-sm" onClick={() => props.changeState("Child is listening...")}>
        Change State in another component
      </button>
    </div>
  );
};

export default ChildComponent;
