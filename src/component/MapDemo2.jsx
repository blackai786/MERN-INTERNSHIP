import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1 ,name:"Mihir",age:20, gender:"male"},
        {id:2 ,name:"Rushang",age:20, gender:"male"},
        {id:3 ,name:"Mux",age:20, gender:"male"},
        {id:4 ,name:"Rutvik",age:20, gender:"male"},
    ]
  return (
    <div style={{color:"antiquewhite"}}>
        {
            users.map((user)=>{
                return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
            })
        }
    </div>
  )
}
