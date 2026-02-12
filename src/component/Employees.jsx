import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
   var title= " Employee App";

   var company={
    name : "Grownited Private Limited",
    year : 2026
   };

   var employee=[
   {
    Id:1,name:"Mihir",age:20,city:'Valsad',dept:"MERN-Stack"
   },
   {
    Id:2,name:"Prathana",age:19,city:'Valsad',dept:"MERN-Stack"
   },
   {
    Id:3,name:"Rutvik",age:45,city:'Navsari',dept:"Python-Developer"
   },
   {
    Id:4,name:"Mox",age:25,city:'Chikhli',dept:"IOS Developer"
   },
   {
    Id:5,name:"Rushang",age:21,city:'Bhagal',dept:"Gamer"
   }
  ];
  return (
    <div>
        <h1 style={{textAlign:"center", color:"lightskyblue"}}>Employees</h1>
        <EmployeeList title={title} company={company} employee={employee}/>
    </div>
  )
}
