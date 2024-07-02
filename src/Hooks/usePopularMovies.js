import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPoularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS

        );
        const json = await data.json();
        dispatch(addPoularMovies(json.results));
    }
    useEffect(()=>{
        popularMovies()
    },[])
}

export default usePopularMovies;
