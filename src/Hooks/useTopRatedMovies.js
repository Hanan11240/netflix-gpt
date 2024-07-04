import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRated = useSelector(store=>store?.movies?.topRated);

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS

        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(()=>{
        !topRated && getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;
