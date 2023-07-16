import React from 'react';
import Action_row from './action_row.js'
const Movie_row = ({ movie }) => {
  console.log(movie,"movie ")
  return (
    <>
    <div className="row3">
        <div className="col11"> 
            <img className="img" src={movie.imge}/> 
        </div> 
        <div className="col12">    
            <h1>{movie.name}</h1>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <h4>{movie.Description}</h4>
            <Action_row/>
        </div>   
         
    </div>
    </>
  );
};

export default Movie_row;































