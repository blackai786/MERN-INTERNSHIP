import React from 'react'

var students = [
  { id: 1, name: "Mihir", course: "MERN", age: 21 },
  { id: 2, name: "Riya", course: "Java", age: 22 },
  { id: 3, name: "Rushang", course: "Python", age: 20 },
  { id: 4, name: "Neha", course: "React", age: 23 },
  { id: 5, name: "Mux", course: "Node", age: 22 }
];
export const MapDemo7 = () => {
  return (
        <div>
      <h3>Student Table</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

