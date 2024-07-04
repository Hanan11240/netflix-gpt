
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies"
import useUpComingMovies from "../Hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
    const showGptView = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    return (<div>
        <Header />
        {showGptView ? <GptSearch />
            : <>
                <MainContainer />
                <SecondaryContainer />
            </>}
    </div>);
}

export default Browse;
