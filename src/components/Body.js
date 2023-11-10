import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {

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