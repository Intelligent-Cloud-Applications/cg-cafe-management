// Packages
import {Routes, Route, Navigate} from 'react-router-dom';

// Local
import Error from '../pages/Error';
import {useContext, useEffect} from "react";
// import Context from "../Context/Context.jsx.old";
import { Context } from "../Context";
import Auth from "../pages/Auth";
import Logout from "../pages/Auth/Logout";


//const Navigate = ({to}) => {
//  const navigate = useNavigate();
//  useEffect(() => {
//    navigate(to);
//  }, [])
//  return (
//    <div></div>
//  )
//}


// Code
const RoutesContainer = () => {
  const { isAuth } = useContext(Context);

  return (
    <Routes>
      <Route path='/auth' element={ <Auth /> } />
      <Route path='/logout' element={ <Logout /> } />
      <Route path='*' element={ <Error /> } />
    </Routes>
  )
}

export default RoutesContainer;