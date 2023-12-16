import React, { useEffect } from 'react'
import Header from './Header'
//import { API_MOVIES_OPTIONS } from '../utils/constants'
//import { useDispatch } from 'react-redux'
//import { addNowPlayingMovies } from '../utils/moviesSlice'
import useAddPlayingMovies from '../CustomHooks/useAddPlayingMovies.js'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import GPT_Search from './GPT_Search.js'
import { useSelector } from 'react-redux'

const Browse = () => {
  const ShowGptSearch = useSelector((store)=>store.gpt.ShowGptSearch);
  useAddPlayingMovies();
  usePopularMovies();

  return (
    <div>
        <Header/>
        {ShowGptSearch?<GPT_Search/> : (
           <>
             <MainContainer/>
             <SecondaryContainer/>
           </>
        )}
        
    </div>
  )
}

export default Browse