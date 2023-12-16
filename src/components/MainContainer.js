import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movie = useSelector((store)=>store.movies?.PlayingMovies);

  if(movie==null) return ;

  const MainMovie = movie[0];
  console.log(MainMovie)

  const {original_title, overview,id} = MainMovie

  return (
    <div> 
       <VideoTitle overview={overview} original_title={original_title} />
       <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer