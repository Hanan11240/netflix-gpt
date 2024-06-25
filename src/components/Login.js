import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(true);
    const navigate = useNavigate()
    const email = useRef(null);
    const password = useRef(null);
    // const name = useRef(null);
    const handleButtonClick = () => {
        // validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error?.code;
                    const errorMessage = error?.message
                    seterrorMessage(errorCode + " " +errorMessage);
                })

        } else {
            // sign in 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");
                 })
                .catch((error) => {
                    console.log(error)
                    const errorCode = error?.code;
                    const errorMessage = error?.message;
                    seterrorMessage(errorCode + " " +errorMessage);

                })
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute" >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="body-image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <p className="text-red-500 font-bold text-lg py-3">{errorMessage}</p>
                <button className="py-4 rounded-lg bg-red-700 w-full block text-center " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-8 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now."}</p>
            </form>
        </div>
    )
}

export default Login;
