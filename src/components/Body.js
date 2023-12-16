import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
//import { useDispatch } from 'react-redux';
//import { auth } from '../utils/Firebase';

const Body = () => {

  //const dispatch = useDispatch();
  //const navigate = useNavigate();

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

  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body