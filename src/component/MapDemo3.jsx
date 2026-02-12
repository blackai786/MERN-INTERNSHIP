import React from 'react'

export const MapDemo3 = () => {
    
    var students = [

        {id:1, Name:"mihir", marks:80, City: "Valsad",gender:"male"},
        {id:2, Name:"Rushang", marks:90, City: "Ahmedabad",gender:"male"},
        {id:3, Name:"Muxi", marks:85, City: "Navsari",gender:"male"},
        {id:4, Name:"Payal", marks:92, City: "gandhinagar",gender:"female"},
    ]
  return (
    <div>
        <table className='table table-dark'> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
       
        <tbody>
        {
            students.map((st)=>{
                return <tr>
                    <td>{st.id}</td>
                    <td>{st.Name}</td>
                    <td>{st.marks}</td>
                    <td>{st.City}</td>
                    <td>{st.gender}</td>
                </tr>

            })
        }
        </tbody>
     </table>
    </div>
  )
}
