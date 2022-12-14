import { combineReducers } from "redux"
import { addMovieReducer } from "./addMovieReducers"
import { movieReducers } from "./movieReducers"

export const rootReducer =  combineReducers({
   movies: movieReducers,
   mylist: addMovieReducer
})