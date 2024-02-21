import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';

const Body = () => {

  return (
        <div>
        <BrowserRouter>
          <Routes>
            <Route  path="/NETFLIX-GPT" element={<Login/>} />
            <Route path="/Browse" element={<Browse/>} />
          </Routes>
          </BrowserRouter>
        </div>
  )
}

export default Body