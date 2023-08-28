import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const Wishlist = () => {
    const watchlist = useSelector(state => state.watchlist);

    // Fetch movie details using watchlist IDs from API or Redux store
    const watchlistMovies = [];

    return (
        <div className={styles.wishlist_container}>
            <h2>Your Watchlist</h2>
            <div className={styles.movies_grid}>
                {watchlistMovies.map((movie) => (
                    <div key={movie.id} className={styles.movie_card}>
                        <img src={movie.poster_path} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        {/* Add other movie details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
