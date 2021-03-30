import React, { useState } from "react";

const ConditionalRendering = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {/* ternary operators */}
      <h4>{flag ? <h2>state is true now</h2> : <h2>state is false now</h2>}</h4>
      <h4>{flag && <h2>state is true now</h2>}</h4>

      <button className="btn btn-primary btn-sm" onClick={() => setFlag(!flag)}>
        Change State
      </button>
    </div>
  );
};

export default ConditionalRendering;
