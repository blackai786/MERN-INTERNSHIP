import React, { useState } from "react";

export const UseStateDemo1 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log("   count after increase is", +count);
  };
  const decreaseCount = () => {
    setCount(count - 1);
    console.log("count after decrease is ", +count);
  };

  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>UseStateDemo 1</h1>
      <h1>count={count}</h1>
      <button onClick={increaseCount}>increase value</button>
      <button onClick={decreaseCount}>Decrease value</button>
    </div>
  );
};
