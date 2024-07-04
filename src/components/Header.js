import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(store => store.user);
    const isGptSearch = useSelector(store=>  store.gpt.showGptSearch)

    const handleLanguageChange = (event)=>{
        const selectedLanguage = event?.target?.value;
        dispatch(changeLanguage(selectedLanguage));
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {

            // navigate('/')
        }).catch((error) => {
            navigate('/error')
        })
    }
    const handleGptSearch = ()=>{
        dispatch(toggleGptSearchView())
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')

            }
        })
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, [])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center ">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            <div className="flex items-center">
                {user &&
                    <div>
                        { isGptSearch && <select className="py-2 px-4 bg-gray-500 text-white" onChange={handleLanguageChange}>
                           { SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>) }
                            
                        </select>}
                        <button className="py-2  px-4 mx-2 bg-purple-500 rounded-lg text-white" onClick={handleGptSearch}>{isGptSearch?'Home':'GPT Search'}</button>
                        <span className="mr-2 font-bold text-white">{user?.displayName ? user?.displayName : 'Guest'}</span>

                        <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>

                    </div>}
            </div>
        </div>

    )

}

export default Header;
