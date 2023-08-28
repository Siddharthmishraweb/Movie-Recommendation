// import { ADD_TO_WATCHLIST } from "./actionTypes";

// const initialState = {
//     watchlist: [],
//     // ... other initial state properties ...
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_WATCHLIST:
//             return {
//                 ...state,
//                 watchlist: [...state.watchlist, action.payload],
//             };
//         // ... other cases ...
//         default:
//             return state;
//     }
// };

// export default rootReducer;




import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SET_SORT_BY, FETCH_MOVIES_SUCCESS  } from "./actionTypes"; // Assuming SET_SORT_BY is the action type for setting the sort option

const initialState = {
    movies: [],
    watchlist: [],
    sortBy: "default", // Default value for sorting
    // ... other initial state properties ...
};

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload, // Update movies array with fetched data
            };
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(id => id !== action.payload),
            };
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            };
        // ... other cases ...
        default:
            return state;
    }
};

export default rootReducer;
