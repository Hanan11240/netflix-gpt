import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(true);
    const dispatch = useDispatch()
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
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
                    updateProfile(user,{
                        displayName:name.current.value,
                    }).then(()=>{
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(addUser({uid,email,displayName}));
                    }).catch((error)=>{
                        seterrorMessage(error.message)
                    });
                   
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
                    // navigate("/browse");
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
            <div className="absolute " >
                <img className="w-screen" src={BG_URL} alt="body-image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
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
