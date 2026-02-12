    import React from 'react'
import "../assets/css/home.css"
import { Link } from 'react-router-dom';
export const Movies = () => {

  var movies=[
    {
        movieid:1,
        moviename: "Amazing Spiderman 2",
    },{
        movieid:2,
        moviename: "Venom",
    },{
        movieid:3,
        moviename: "Avengers : End Game",
    },{
        movieid:4,
        moviename: "Hereditary",
    },{
        movieid:5,
        moviename: "Jumanji",
    },{
        movieid:6,
        moviename: "Conjuring",
    },
  ];

  return (
    <div>
        <h1 style={{color:"red"}}>Netflix Movies</h1>
        {
           movies.map((movie) => {

            return <ul><li>
                <Link to={`/watch/${movie.moviename}`}>{movie.moviename}</Link>
            </li></ul>
              
        })
        }


    </div>
  )
}
