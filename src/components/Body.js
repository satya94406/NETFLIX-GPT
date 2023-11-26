import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter ,} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { auth } from '../utils/Firebase';

const Body = () => {

  const dispatch = useDispatch();

  const appRoute = createBrowserRouter([
     {
       path:"/",
       element:<Login/>
     },
     {
      path:"/Browse",
      element:<Browse/>
     }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email , DisplayName,photoURL} = user;
        dispatch(addUser({uid:uid , email:email ,DisplayName:DisplayName,photoURL:photoURL}))
        // ...
      } else {
        // User is signed out
        // ...
        
      }
    });
  },[])

  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body