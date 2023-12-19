import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  
   const{tmdbResults , gptMoviesList} = useSelector((store)=>store.gpt) ;
     console.log(gptMoviesList);
     console.log(tmdbResults);

     if(!gptMoviesList) return null 
  return (
    <div className= ' m-1 p-1 bg-black opacity-80'>
       
        { gptMoviesList.map((movie, index)=>(
          <MovieList key={movie}
          title={movie}
          movies={tmdbResults[index].results} 
          />
        ))
        }
    </div>
  )
}

export default GptMovieSuggestion