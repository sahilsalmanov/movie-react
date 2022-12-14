import { Action_MOVIE_Types } from "../action-types"

const initialState = {
    loading: false,
    movies: [ ],
    error: null
}

export const movieReducers = (state = initialState, action) => {
    switch (action.type) {
        case Action_MOVIE_Types.MOVIE_LOAD:
            return {
                loading: true
            }
        case Action_MOVIE_Types.MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error:null
            }
        case Action_MOVIE_Types.MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
      
        default: return state
    }
}