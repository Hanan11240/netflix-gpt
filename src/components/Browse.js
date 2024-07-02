
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies"
import useUpComingMovies from "../Hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    return (<div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>);
}

export default Browse;
