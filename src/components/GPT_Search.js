import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GPT_Search = () => {
  return (
    <>
       <div className='fixed -z-10 '>     {/* by -z-10 we can see search bar without it we cannot see search bar  */}
               <img className='h-screen md:h-min object-cover md:object-none ' src= {BG_URL} alt='logo'></img>
       </div>
       <div className=' pt-[20%] md:pt-4'> 
            <GptSearchBar/>
            <GptMovieSuggestion/>
       </div>
    </>
  )
}

export default GPT_Search ;