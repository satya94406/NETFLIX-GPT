import React from 'react';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const user =useSelector(store => store.user);
  console.log(user);
  const Navigate =useNavigate();
  const HandleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      Navigate("/");
    }).catch((error) => {
      // An error happened.
      Navigate("/error")
    });
  }

  return (
    <div className='absolute z-30 flex justify-between' >
      <img className='w-40  bg-gradient-to-b from-slate-700' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
      {user &&
      <div className='flex'>
        <img className='h-12 w-12' src={user ? user.photoURL : null}/>
        <button onClick={HandleSignOut} className='bg-red-700 h-7 my-5 mx-96 '>SignOut</button>
      </div>}
      
    </div>
  )
}

export default Header;