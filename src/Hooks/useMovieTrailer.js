import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    // const [trailer,setTrailer] = useState("");
    const dispatch = useDispatch();
    const getMovievideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter(video => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        // setTrailer(trailer);
    }
    useEffect(() => {
        getMovievideos()
    }, [])
};

export default useMovieTrailer;
