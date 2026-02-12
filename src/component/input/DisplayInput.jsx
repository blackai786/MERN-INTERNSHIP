import React from "react";
import { useState } from "react";
export const DisplayInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({
      name: name,
      email: email,
    });

    setName("");
    setEmail("");
  };

  return (
    <div style={{color:"skyblue"}}>
      <h2>Insert Information</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleSubmit}>Submit</button>

      <br />
      <br />

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};
