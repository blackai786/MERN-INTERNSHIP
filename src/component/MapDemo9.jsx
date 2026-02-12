import React from 'react'
var users = [
  { id: 1, name: "Admin", active: true },
  { id: 2, name: "Guest", active: false },
  { id: 3, name: "User", active: true }
];
export const MapDemo9 = () => {
  return (
        <div>
      <h3> Conditional Rendering</h3>

      {users.map((user) => (
        <p
          key={user.id}
          style={{ color: user.active ? "green" : "red" }}
        >
          {user.name} - {user.active ? "Active" : "Inactive"}
        </p>
      ))}
    </div>
  );
}
