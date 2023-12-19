import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword ,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
//import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, PHOTO_URL } from '../utils/constants';

const Login = () => {

  const [SignInOut ,SetSignInOut] = useState(true);
  const [ErrorMessage , setErrorMessage] = useState(null);
  //const Navigate =useNavigate();
  const dispatch = useDispatch(); 
  

  const name = useRef(null);
  const email = useRef(null);
  const password =useRef(null);

  
      const ValidationCheck =()=>{
      const message = CheckValidData(email.current.value , password.current.value);
      setErrorMessage(message);
      if (message) return ;

      if(!SignInOut){
        //SignUp Logic
         createUserWithEmailAndPassword(auth, email.current.value , password.current.value )
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTO_URL  // {PHOTO_URL } Not need to wrap  inside a curly bracket since its not a JSX... 
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email , DisplayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid , email:email ,DisplayName:DisplayName,photoURL:photoURL}))
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });          
          console.log(user);
        //  Navigate('/Browse')

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           setErrorMessage(errorCode+" "+errorMessage)
        });
      }
      else{
        //SignIn Logic
        signInWithEmailAndPassword(auth, email.current.value , password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //console.log(user);
         // Navigate('/Browse')

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMessage)

        });


      }
  }

  const SignHandle =(e)=>{
     e.preventDefault();
     SetSignInOut(!SignInOut)
  }
  return (
    <div>
    <div >
      <Header/>
    </div>

      <div className='absolute  '>
        <img className=' h-screen md:h-full object-cover md: ' src={BG_URL} alt='logo'></img>
      </div>

      <form onClick={(e)=>e.preventDefault()} className="w-full md:w-72 mx-auto relative bg-gray-900 top-28 px-2 rounded-lg bg opacity-90">

          <h1 className='font-bold text-zinc-100   p-2 '>{SignInOut? "SignIn" : "SignUp"}</h1>
          {
            !SignInOut && (<input type='type' ref={name}  placeholder='Name' className='w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100'/>)
          }
          <input type='text' ref={email} placeholder='Email or Phone number'  className='w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100'  />
          <input type='password' ref={password} placeholder='Password'  className=' w-[95%] md:w-auto px-2 m-2 rounded-md bg-gray-100 ' />
          <p className=' px-2 m-2 text-red-600 text-sm'>{ErrorMessage}</p>
          <button onClick={ValidationCheck}  className='w-[95%] md:w-[95%] px-2 m-2  rounded-md bg-rose-600  '>{SignInOut?"Login" : "SignUp"}</button>
          <button className='text-slate-50  m-2 font-semibold text-sm cursor-pointer' onClick={SignHandle}> {SignInOut ? "New to Netflix ? Sign up now." : "Allready register ? SignIn Now."}</button>
      </form>
    </div>
    
  )
}

export default Login ;