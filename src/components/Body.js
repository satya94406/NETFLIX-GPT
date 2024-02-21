import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import ErrorPage from './ErrorPage';
//import { useDispatch } from 'react-redux';
//import { auth } from '../utils/Firebase';

const Body = () => {

  //const dispatch = useDispatch();
  //const navigate = useNavigate();

 

  return (
    <div>
        <Usercontxt.Provider>
        <div>
          <Routes>
            <Route  path="/NETFLIX-GPT" element={<Login/>} />
            <Route path="/Browse" element={<Browse/>} />
          </Routes>
        </div>
      </Usercontxt.Provider>
    </div>
  )
}

export default Body