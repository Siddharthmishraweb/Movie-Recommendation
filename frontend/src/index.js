// import React from "react";
// import ReactDOM from "react-dom/client";
// import MoviesData from "./MoviesData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <MoviesData />
//     </React.StrictMode>
// );



import MoviesData from "./MoviesData";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store'// Import your Redux store


ReactDOM.render(
    <Provider store={store}>
        <MoviesData />
    </Provider>,
    document.getElementById('root')
);

