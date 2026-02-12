import React from 'react'

export const MapDemo5 = () => {
var students =[
        {id:1,name:"Mihir",age:20,marks:85,city:"Valsad",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"rekha",age:27,marks:72,city:"ahmedabad",gender:"female"},
        {id:4,name:"Mux",age:22,marks:90,city:"Navsari",gender:"Male"},
        {id:5,name:"Rutvik",age:30,marks:86,city:"Navsari",gender:"male"},
    ]
   return (
    <div style={{textAlign:"center"}}>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                            {/* <td style={{backgroundColor:st.marks>80 ? "yellow":"white"}}>{st.marks}</td> */}
                            <td style={{backgroundColor:st.marks>80 && "lightgreen"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
