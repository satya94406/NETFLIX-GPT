import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth"; // Import signInWithPopup function
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, PHOTO_URL } from '../utils/constants';
import { GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const [SignInOut, SetSignInOut] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const ValidationCheck = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!SignInOut) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL
          }).then(() => {
            const { uid, email, DisplayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, DisplayName: DisplayName, photoURL: photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const SignHandle = (e) => {
    e.preventDefault();
    SetSignInOut(!SignInOut);
  };

  const handleForgotPassword = () => {
    const emailAddress = email.current.value;
    sendPasswordResetEmail(auth, emailAddress)
      .then(() => {
        // Password reset email sent
        alert("Go to email for password reset");
      })
      .catch((error) => {
        // Error sending password reset email
         console.error("Error sending password reset email:", error);
      });
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Facebook Sign-in successful
        const user = result.user;
        // Additional logic (e.g., dispatching user data to Redux)
      })
      .catch((error) => {
        // Handle errors
        console.error("Facebook Sign-in error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google Sign-in successful
        const user = result.user;
        // Additional logic (e.g., dispatching user data to Redux)
      })
      .catch((error) => {
        // Handle errors
        console.error("Google Sign-in error:", error);
      });
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className='absolute'>
        <img className='h-screen md:h-full object-cover md:' src={BG_URL} alt='logo'></img>
      </div>

      <form onClick={(e) => e.preventDefault()} className="w-full md:w-72 mx-auto relative bg-gray-900 top-28 px-2 rounded-lg bg opacity-90">

        <h1 className='font-bold text-zinc-100 p-2'>{SignInOut ? "Sign In" : "Sign Up"}</h1>
        {
          !SignInOut && (<input type='text' ref={name} placeholder='Name' className='w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100' />)
        }
        <input type='text' ref={email} placeholder='Email or Phone number' className='w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100' />
        <input type='password' ref={password} placeholder='Password' className='w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100' />
        <p className='px-2 m-2 text-red-600 text-sm'>{ErrorMessage}</p>
        <button onClick={ValidationCheck} className='w-[95%] md:w-[95%] px-2 m-2 rounded-md bg-rose-600'>{SignInOut ? "Login" : "SignUp"}</button>
        <button className='text-slate-50 m-2 font-semibold text-sm cursor-pointer' onClick={SignHandle}>
          {SignInOut ? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}
        </button>
        {SignInOut && ( // Render the "Forgot Password" button only in the Sign In mode
          <button className='text-slate-50 m-2 font-semibold text-sm cursor-pointer' onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        )}
        <button onClick={handleGoogleSignIn} className='w-[95%] md:w-[95%] px-2 m-2 rounded-md bg-rose-600'>{SignInOut ? "Login" : "SignUp"} with Google</button>
        <button onClick={handleFacebookSignIn} className='w-[95%] md:w-[95%] px-2 m-2 rounded-md bg-rose-600'>{SignInOut ? "Login" : "SignUp"} with Facebook</button>
      </form>
    </div>

  )
}

export default Login;
