import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
    const moviename = useParams().name
  return (
    <div>
        <h1 style={{textAlign:"center", color:"red"}}>Watching Movie.....{moviename}</h1>
    </div>
  )
}
