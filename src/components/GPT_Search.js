import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GPT_Search = () => {
  return (
    <div> 
        <div className='fixed -z-10'>     {/* by -z-10 we can see search bar without it we cannot see search bar  */}
               <img src= {BG_URL} alt='logo'></img>
        </div>
         <GptSearchBar/>
         <GptMovieSuggestion/>
    </div>
  )
}

export default GPT_Search ;