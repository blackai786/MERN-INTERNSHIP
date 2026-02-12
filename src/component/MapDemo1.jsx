import React from 'react'

export const MapDemo1 = () => {
    let cars =["Audi", "BMW", "Tata", "Honda", "Porsche", "Lamborghini", "Mahindra"] ;
  return (
    <div style={{color:"wheat"}}>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }
    </div>
  )
}
