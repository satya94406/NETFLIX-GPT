import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  
  const movies = useSelector((store)=>store.movies)

  return (
    movies.PlayingMovies &&
    <div className='bg-slate-800'>
     <div className='-mt-56 relative z-20'>
     <div> <MovieList title={"NowPlaying"} movies={movies.PlayingMovies} /></div>
     <div> <MovieList title={"Trending"} movies={movies.PlayingMovies} /></div>
     <div> <MovieList title={"Popular"} movies={movies.PopularMovies} /></div>
     <div> <MovieList title={"UpComing"} movies={movies.PlayingMovies} /></div>
     <div> <MovieList title={"Horror"} movies={movies.PlayingMovies} /></div>
    </div>
  </div>
  )
}

export default SecondaryContainer