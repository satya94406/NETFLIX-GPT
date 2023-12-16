import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        PlayingMovies : null ,
        trailerVideo:null,
        PopularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.PlayingMovies = action.payload ;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload ;
        }
        ,
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
});

export default movieSlice.reducer ;
export const {addNowPlayingMovies ,addPopularMovies, addTrailerVideo} = movieSlice.actions ;