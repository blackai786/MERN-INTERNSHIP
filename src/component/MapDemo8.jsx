import React from 'react'
var courses = [
  { id: 1, title: "React", duration: "3 Months" },
  { id: 2, title: "Node.js", duration: "2 Months" },
  { id: 3, title: "MongoDB", duration: "1 Month" },
  { id: 4, title: "Express", duration: "1.5 Months" }
];
export const MapDemo8 = () => {
  return (
    <div style={{color:"antiquewhite"}}>
      <h3>Course Cards</h3>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "200px"
          }}
        >
          <h4>{course.title}</h4>
          <p>Duration: {course.duration}</p>
        </div>
      ))}
    </div>
  );
}
