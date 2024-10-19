// Packages
import {Routes, Route, Navigate} from 'react-router-dom';

// Local
import Error from '../pages/Error';
import {useContext, useEffect} from "react";
import Context from "../Context/Context";


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
      <Route path='*' element={ <Error /> } />
    </Routes>
  )
}

export default RoutesContainer;