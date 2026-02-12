import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = () => {
   const teamname =useParams().name
  return (
    <div>
        <h1 style={{textAlign:"center", color:"red"}}>Team Details : {teamname}</h1>
    </div>
  )
}
