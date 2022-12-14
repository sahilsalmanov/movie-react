import axios from "axios"
import { Action_MOVIE_Types } from "../action-types"



export const getMovies = (search)=>{
    return async (dispatch)=>{
        try {
            

            dispatch({
                type: Action_MOVIE_Types.MOVIE_LOAD
            })


            const {data} =  await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=82778cb5`)

            dispatch({
                type:Action_MOVIE_Types.MOVIE_SUCCESS,
                payload:data.Search
            })

        } catch (error) {
            dispatch({
                type:Action_MOVIE_Types.MOVIE_ERROR,
                payload:error.message
            })
        }
    }
}

export const addMovieToList = (movie)=>{

    return {
        type:Action_MOVIE_Types.MOVIE_ADD_LIST,
        payload:movie
    }

}

export const removeMovieFromList=(id)=>{
    return {
        type:Action_MOVIE_Types.REMOVE_FROM_LIST,
        payload:id
    }
}