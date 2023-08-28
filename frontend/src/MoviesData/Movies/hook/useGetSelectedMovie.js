import axios from "axios";
import { useEffect, useState } from "react";

const useGetSelectedMovie = ({ movieId }) => {
    const [searchResult, setSearchResult] = useState({});
    const [creditData, setCreditData] = useState({});
    const [loadingSearchResult, setLoadingSearchResult] = useState(true);
    const [creditDataLoading, setCreditDataLoading] = useState(true);
    const getSearchResult = async () => {
        try {

            console.log("API URL for searchResult:", `/api/movies/${movieId}`);
            console.log("API URL for creditData:", `/api/movies/${movieId}/credits`);
            console.log("searchResult:", searchResult);
            console.log("creditData:", creditData);

            const response = await axios.get(
                `api/movies/${movieId}`
            );

            console.log('response:: ', response)
            setSearchResult(response?.data);
            setLoadingSearchResult(false);
            const creditResponse = await axios.get(
                `api/movies/${movieId}`
            );
            setCreditData(creditResponse?.data);
            setCreditDataLoading(false);
        } catch (error) {
            console.error(error, "Oops! Somthing went wrong");
            setLoadingSearchResult(false);
        }
    };

    useEffect(() => {
        getSearchResult();
    }, [movieId]);
    console.log("&&&&&&  loadingSearchResult   &&&&&&",loadingSearchResult)
    return {
        loadingSearchResult,
        searchResult,
        creditData,
        creditDataLoading,
    };
};
export default useGetSelectedMovie;
