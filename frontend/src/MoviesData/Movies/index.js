import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MoviesContainer from "./MoviesContainer";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from '../../redux/actions';
import { Link } from "react-router-dom";

const Movies = () => {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.sortBy);
    const handleSortChange = (event) => {
        console.log("Sorting option selected:", event.target.value);
        dispatch(setSortBy(event.target.value));
    };
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.input_field}>
                    <input
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                        className={styles.input}
                        type="search"
                        placeholder="Search"
                    />
                    {searchInput === "" ? (
                        <div className={styles.suffix}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="24px"
                                height="24px"
                            >
                                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                            </svg>
                        </div>
                    ) : null}
                </div>
                <div className={styles.wishlist}>
                    {/* ... (wishlist content) */}
                </div>
                <div>
                <Link
                    to="/wishlist"
                    className={styles.wishlist_button}
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#dfdfde",
                        color: "black",
                        borderRadius: "5px",
                        textDecoration: "none",
                    }}
                >
                    Wishlist
                </Link>
                </div>
                <div className={styles.sort_by}>
                    <label className={styles.sort_label}>Sort by:</label>
                    <select
                        className={styles.sort_select}
                        value={sortBy}
                        onChange={handleSortChange}
                    >
                        <option value="default">Default</option>
                        <option value="rating">Rating</option>
                        <option value="releaseDate">Release Date</option>
                    </select>
                </div>

                <div className={styles.home} onClick={() => setSearchInput("")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                    >
                        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z" />
                    </svg>
                </div>
            </header>
            {console.log("yaha se jaa rha h", searchInput)}
            <MoviesContainer searchInput={searchInput} />
        </div>
    );
};

export default Movies;

