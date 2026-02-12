import React, { useState } from "react";

export const UseStateDemo3 = () => {
  const [user, setUser] = useState(["Rushang", "Mox", "Mihir"]);

  const addUser = () => {
    setUser([...user, "Rutvik"]);
  };

  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>User State Demo 3</h1>
      {user.map((u) => {
        return <li>{u}</li>;
      })}
      <button onClick={addUser}>Add User</button>
    </div>
  );
};
