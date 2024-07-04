import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { addPoularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovie = useSelector(store=>store?.movies?.popularMovies);

    const popularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS

        );
        const json = await data.json();
        dispatch(addPoularMovies(json.results));
    }
    useEffect(()=>{
        !popularMovie && popularMovies()
    },[])
}

export default usePopularMovies;
