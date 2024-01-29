import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movie = useSelector((store)=>store.movies?.PlayingMovies);
  console.log(movie);
  if(movie==null) return ;

  const MainMovie = movie[0];
  console.log(MainMovie)

  const {original_title, overview,id} = MainMovie

  return (
    <div className='pt-28 md:pt-0'> 
       <VideoTitle overview={overview} original_title={original_title} />
       <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer