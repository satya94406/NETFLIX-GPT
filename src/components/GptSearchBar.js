import React, { useRef } from 'react';
import { lang } from '../utils/constantLanguage';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import MovieList from './MovieList';
import { API_MOVIES_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSearch';

const GptSearchBar = () => {
  
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const lang_key = useSelector((store)=>store.config.lang) ;
  console.log(lang_key);
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_MOVIES_OPTIONS);
    const json = await data.json();
    return json ;
  }

  const handleGptSearchSubmit=async()=>{
      console.log(searchText.current.value);
      //make an api call to gpt api and get movie results  

      const gptQuery = "Act as a movie recommendation system and suggest sone movies for the query"+
              searchText.current.value +
              "only give me name of 5 movies with separated by commas(,) like don , dhammal , ravan , sholay , gadar"

      const openaiResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      })
      if(!openaiResults.choices){
         //error handling page
      }
     // console.log(openaiResults.choices?.[0]?.message?.content);
      const gptMoviesList= openaiResults.choices?.[0]?.message?.content.split(",")
      // now results - ["sultan","bajangi",etc upto 5 movies]
      console.log(gptMoviesList)

      const promiseArray = gptMoviesList.map((movie)=>searchMovieTMDB(movie)) ;
      //[promise, promise , promise , promise , promise]
      console.log(promiseArray)

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovieResults({tmdbResults:tmdbResults , gptMoviesList:gptMoviesList}))

  }
 
  return (
    <div className='flex justify-center '>
        <form className='mt-16 w-full md:w-1/2  grid grid-cols-12 bg-slate-900 p-1 rounded-lg' 
        onSubmit={(e)=>e.preventDefault()}
         >
            <input 
            ref={searchText}
            type='text' 
            className=' p-2 mx-1 my-2  col-span-9  text-sm bg-sky-300 rounded-lg placeholder-black'
             placeholder={lang[lang_key].searchPlaceholder}
             />
            <button className='p-1 my-2 bg-red-600  col-span-3 rounded-lg ' 
            onClick={handleGptSearchSubmit}>{lang[lang_key].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar