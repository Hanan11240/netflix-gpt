import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpComingMoviesMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store=>store?.movies?.upComingMovies);

    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS

        );
        const json = await data.json();
        dispatch(addUpComingMoviesMovies(json.results));
    }
    useEffect(()=>{
        !upComingMovies && getUpComingMovies()
    },[])
}

export default useUpComingMovies;
