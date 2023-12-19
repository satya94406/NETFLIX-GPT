import React from 'react';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSearch';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const user =useSelector(store => store.user);
 // console.log(user);
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.ShowGptSearch);
  

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email , DisplayName,photoURL} = user;
        dispatch(addUser(
          {uid:uid ,
           email:email , 
           DisplayName:DisplayName,
           photoURL:photoURL}
          ))
          navigate("/Browse")
          
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return()=>unsubscribe();
  },[])

  const HandleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const HandleGPT_Search=()=>{
    dispatch(toggleGptSearch())
  };

  const handlechangeLanguage=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute z-30  h-auto flex justify-between w-full bg-slate-700 sm:to-blue-400 md:to-blue-400 flex-col md:flex-row'  >
      <img className='w-40 h-10 md:h-auto   mx-auto md:mx-0 bg-gradient-to-b from-slate-700' src={LOGO} alt='logo'/>
      {user &&
      <div className='flex justify-between p-3'>
     {  showGptSearch &&
       <select className='h-7 mt-3 rounded-md bg-slate-900 text-gray-50' onChange={handlechangeLanguage} >
          { SUPPORTED_LANG.map((Lang)=><option key={Lang.identifier} value={Lang.identifier}>{Lang.name}</option>) }
       </select>
      }
          <button className='px-1 mt-2 h-8 mx-1 bg-fuchsia-400 text-gray-50 rounded-lg'
              onClick={HandleGPT_Search}>{showGptSearch?"Home":"GPT Search"}</button>
        
          <img className='hidden md:inline-block h-10 w-10 rounded-md ' src={user ? user.photoURL : null}/>
          <button onClick={HandleSignOut} className='bg-red-700 h-6 my-3 rounded-lg '>SignOut</button>
        
      </div>}
      
    </div>
  )
}

export default Header;