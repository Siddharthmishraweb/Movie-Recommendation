/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import useDebounceQuery from "./useDebounceQuery";

const useGetSearchMovie = ({ searchInput }) => {
    const [searchData, setSearchData] = useState([]);
    const [searchDataLoading, setSearchDataLoading] = useState(true);
    const { query = "", debounceQuery } = useDebounceQuery();
    console.log("&&&&&&&  query   &&&&&&&&&&&&&&&&&&&&", query)
    console.log("search IIIIIIIIIIIIIIIIIIIIIIII", searchInput)
    useEffect(() => {
        debounceQuery(searchInput);
    }, [debounceQuery, searchInput]);

    const getSearchData = async () => {
        try {
            console.log("&&&&&&&  query   &&&&&&&&&&&&&&&&&&&&", query)
            //console.log("aaaaaaaaaaaaaaaa", `/api/search?query=${searchInput}`);
            const response = await axios.get(`/api/search?query=${query}`);
            console.log("response:JJJJJ ",response)
            setSearchData(response.data);
            console.log("searchDataffff  back ui: ",searchData)
            setSearchDataLoading(false);
        } catch (error) {
            console.error(error, "Oops Something Went Wrong");
            setSearchDataLoading(false);
        }
    };

    useEffect(() => {
      getSearchData();
    }, [query]);

    console.log("searchData  back ui: ",searchData)

    return {
        searchData,
        searchDataLoading,
        query,
    };
};
export default useGetSearchMovie;

