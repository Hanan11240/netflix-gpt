import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movies  = useSelector(store=> store?.movies)
    return (
        <div className=" bg-black">
            <div className="-mt-60 relative">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRated} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies} />
            </div>
         
        </div>
    )
}

export default SecondaryContainer;
