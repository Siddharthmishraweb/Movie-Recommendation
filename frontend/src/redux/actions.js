import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, FETCH_MOVIES_SUCCESS  } from "./actionTypes";
import { SET_SORT_BY } from "./actionTypes"; // Import the action type constant

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("/api/movies");
            console.log('response *****************', response)
            const data = await response.json();
            dispatch(fetchMoviesSuccess(data));
        } catch (error) {
            // Handle error
        }
    };
};

export const addToWatchlist = (movieId) => {
    return {
        type: ADD_TO_WATCHLIST,
        payload: movieId,
    };
};
export const setSortBy = (sortBy) => {
   return {
       type: SET_SORT_BY,
       payload: sortBy,
   };
};

export const removeFromWatchlist = (movieId) => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload: movieId,
    };
};
