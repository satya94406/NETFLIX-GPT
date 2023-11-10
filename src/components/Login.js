import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidData } from '../utils/Validate'

const Login = () => {

  const [SignInOut ,SetSignInOut] = useState(true);
  const [ErrorMessage , setErrorMessage] = useState(null);

  //const name = useRef(null);
  const email = useRef(null);
  const password =useRef(null);

  const ValidationCheck =()=>{
      const message = CheckValidData(email.current.value , password.current.value);
      setErrorMessage(message);
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

      <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'></img>
      </div>

      <form onClick={(e)=>e.preventDefault()} className=" w-72  mx-auto relative bg-gray-900 top-20 px-2 rounded-lg bg opacity-90">

          <h1 className='font-bold text-zinc-100   p-2 '>{SignInOut? "SignIn" : "SignUp"}</h1>
          {
            !SignInOut && (<input type='type'  placeholder='Name' className='px-2 m-2 rounded-md bg-gray-100'/>)
          }
          <input type='text' ref={email} placeholder='Email or Phone number'  className='px-2 m-2 rounded-md bg-gray-100'  />
          <input type='password' ref={password} placeholder='Password'  className='px-2 m-2 rounded-md bg-gray-100 ' />
          <p className=' px-2 m-2 text-red-600 text-sm'>{ErrorMessage}</p>
          <button onClick={ValidationCheck}  className=' px-2 m-2 w-64 rounded-md bg-rose-600  '>{SignInOut?"Login" : "SignUp"}</button>
          <button className='text-slate-50  m-2 font-semibold text-sm cursor-pointer' onClick={SignHandle}> {SignInOut ? "New to Netflix ? Sign up now." : "Allready register ? SignIn Now."}</button>
      </form>
    </div>
    
  )
}

export default Login ;