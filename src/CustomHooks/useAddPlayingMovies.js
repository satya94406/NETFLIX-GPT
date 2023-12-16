import { useDispatch, useSelector } from "react-redux";
import { API_MOVIES_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddPlayingMovies=()=>{
  const dispatch = useDispatch();
  const moviesPlaying = useSelector((store)=>store.movies.PlayingMovies)
  // fetch data from tmdb and update store
  const getmoviesPlaying = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_MOVIES_OPTIONS)
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
   !moviesPlaying && getmoviesPlaying();
  },[])
};

export default  useAddPlayingMovies;