import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_MOVIES_OPTIONS } from '../utils/constants';

const useTrailerVideo = (movie_id) => {
    
  //const { trailerId , setTrailerId} = useState(null);
  const dispatch = useDispatch();
  const moviesTrailer = useSelector((store)=>store.movies.trailerVideo)

  // fetch  trailer video and update the redux store 
  const getMovieVideoTrailer = async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id + '/videos?language=en-US', API_MOVIES_OPTIONS);
     const json = await data.json();
     console.log(json);
  //dispatch(addNowPlayingMovies(json.results))
     const filterData = json.results.filter((video)=>video.type==="Trailer");
     const trailer = filterData.length ? filterData[0] : json.results[0];
     console.log(trailer);
    // setTrailerId(trailer.key);
     //use trailerId in API instead trailerVideo.key
     dispatch(addTrailerVideo(trailer))
    
   }
 
   useEffect(()=>{
    !moviesTrailer && getMovieVideoTrailer();
   },[])
}

export default useTrailerVideo