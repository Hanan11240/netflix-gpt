import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = ()=>{
    return(
        <div >
            <div className="absolute -z-10 "  >
                <img className="w-screen" src={BG_URL} alt="body-image" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;
