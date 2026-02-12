import React, { useState } from "react";

export const UseStateDemo2 = () => {
  const [Loading, setLoading] = useState(true);
  const Loader = () => {
    setLoading(false);
  };
  const Loader2 = () => {
    setLoading(true);
  };
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>UseStateDemo2</h1>
      {Loading == true ? (<h1>Mux is Mux</h1>) : (<h1>Mux is mux even if you stop </h1>)}
      <button onClick={Loader2}>Start</button>
      <button onClick={Loader}>Stop</button>
    </div>
  );
};
