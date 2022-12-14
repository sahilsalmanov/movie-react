import { Action_MOVIE_Types } from "../action-types"


const initialState = {
    my_list: []
}

export const addMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action_MOVIE_Types.MOVIE_ADD_LIST:
            return {
                ...state,
                my_list: [...state.my_list, action.payload]
            }
        case Action_MOVIE_Types.REMOVE_FROM_LIST:
            const newList = state.my_list.filter((item) => {
                return item.imdbID !== action.payload
            })
            return {
                ...state,
                my_list: newList
            }

        default: return state
    }
}