import React from 'react'

export const MapDemo4 = () => {

    var cities=[
        {id:1, Name :"Ahmedabad", Population :"9.06 Million", AQI :174},
        {id:2, Name :"Delhi", Population :"34.67 Million", AQI :222},
        {id:3, Name :"Bangalore", Population :"14.39 Million", AQI :154},
        {id:4, Name :"Goa", Population :"1.59 Million", AQI :160},
        {id:5, Name :"Hydrabad", Population :"11.3 Millon", AQI :193},
    ]
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city)=>{
                          return <tr>
                        <td>{city.id}</td>
                        <td>{city.Name}</td>
                        <td>{city.Population}</td>
                        <td>{city.AQI}</td>
                    </tr>

                })
                }
            </tbody>
        </table>
    </div>
  )
}
