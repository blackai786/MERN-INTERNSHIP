import React from 'react'
import { SubEmpolyeeList } from './SubEmpolyeeList'

export const EmployeeList = (props) => {
  console.log("emplist",props)

  return (
    <div style={{color:"lightskyblue"}}>
        <h2>Employee-List</h2>
        <h3>{props.title}</h3>
        <h3>{props.company.name}</h3>
        <h3>{props.company.year}</h3>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>CITY</th>
              <th>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {
              props.employee.map((emp) => {
                return<tr>
                  <td>{emp.Id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.city}</td>
                  <td>{emp.dept}</td>
                </tr>
                
              })
            }
          </tbody>
        </table>
        <SubEmpolyeeList title={props.title}/>
    </div>
  )
}
