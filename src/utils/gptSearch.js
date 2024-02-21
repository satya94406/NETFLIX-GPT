import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        ShowGptSearch : false ,
        gptMoviesList : null ,
        tmdbResults : null ,
    },
    reducers:{
        toggleGptSearch :(state)=>{
            state.ShowGptSearch = !state.ShowGptSearch ;
        },
        addGptMovieResults:(state,action)=>{
            const {tmdbResults , gptMoviesList } = action. payload
            state.tmdbResults = tmdbResults;
            state.gptMoviesList =gptMoviesList ;

        }
    }
})

export default gptSlice.reducer ;
export const{toggleGptSearch, addGptMovieResults} = gptSlice.actions ;