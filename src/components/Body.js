import React from 'react';
import Browse from './Browse';
import Login from './Login';
import ErrorPage from './ErrorPage';
import { RouterProvider, createBrowserRouter, Route, Switch } from 'react-router-dom';

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> ,
      errorElement: <ErrorPage /> 
    },
    {
      path: "/Browse",
      element: <Browse/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default Body;
