import React, { useState } from 'react';
//import { useEffect } from 'react';
import { API_MOVIES_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
//import { addTrailerVideo } from '../utils/moviesSlice';
import useTrailerVideo from '../CustomHooks/useTrailerVideo';

const VideoBackground = ({movie_id}) => {

  const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
  useTrailerVideo(movie_id);
  console.log(trailerVideo)
  return (
    <div className='pt-0 md:pt-0'>
       <iframe className='w-screen aspect-video ' src= {"https://www.youtube.com/embed/"+ trailerVideo?.key  +"?autoplay=1&mute=1" } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
       </iframe>
    </div>
  )
}

export default VideoBackground