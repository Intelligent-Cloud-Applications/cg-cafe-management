import { useContext, useEffect, useRef } from "react";
import { Auth, API } from "aws-amplify";
import Context from "./Context/Context.jsx.old";
import RoutesContainer from "./routes";
import LoaderProvider from "./components/LoaderProvider";
import InstitutionContext from "./Context/InstitutionContext.jsx.old";
import apiPaths from "./utils/api-paths";

function App() {
//   const UtilCtx = useRef(useContext(Context).util);
//   const RefCtx = useRef(useContext(Context));
//   const RefInstitutionCtx = useRef(useContext(InstitutionContext));
//   const InsitutionCtx = useContext(InstitutionContext);
//
//   useEffect(() => {
//     const dataLoadFn = async () => {
//       try {
//         let data = require("./utils/data.json");
//         data = await API.get(
//           "prod",
//           `/any/get-institution-data/${data && data.InstitutionId}`
//         );
//         data.InstitutionId = data.institutionid;
//
//         document.documentElement.style.setProperty(
//           "--color-primary",
//           data.PrimaryColor
//         );
//         document.documentElement.style.setProperty(
//           "--color-secondary",
//           data.SecondaryColor
//         );
//         document.documentElement.style.setProperty(
//           "--color-light-primary",
//           data.LightPrimaryColor
//         );
//         document.documentElement.style.setProperty(
//           "--color-lightest-primary",
//           data.LightestPrimaryColor
//         );
//
//         RefInstitutionCtx.current.setInstitutionData(data);
//         RefCtx.current.onUnauthLoad(data.InstitutionId);
//
//         await check(data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//
//     const check = async (data) => {
//       UtilCtx.current.setLoader(true);
//
//       try {
//         await Auth.currentAuthenticatedUser();
//         const userdata = await API.get(
//           "main",
//           `/user/profile/${data && data.InstitutionId}`
//         );
//
//         const location = await API.get("main", apiPaths?.getUserLocation);
//
//         // userdata.Status = true;
//         RefCtx.current.setUserData((prev) => ({
//           ...prev,
//           ...userdata,
//           location,
//         })
//         );
//         RefCtx.current.setIsAuth(true);
//         UtilCtx.current.setLoader(false);
//         RefCtx.current.onAuthLoad(true, data.InstitutionId);
//       } catch (e) {
//         console.log(e);
//         RefCtx.current.setUserData({});
//         UtilCtx.current.setLoader(false);
//       } finally {
//         if((RefCtx.current.userData)["location"] === undefined) {
//          const location = await API.get("main", apiPaths?.getUserLocation);
//          RefCtx.current.setUserData((prev) => ({
//            ...prev,
//            location: location,
//          }));
//         }
//       }
//     };
//
//     dataLoadFn();
//   }, []);

  return (
    <LoaderProvider>
      {/*{InsitutionCtx.institutionData && <RoutesContainer />}*/}
      <RoutesContainer />
    </LoaderProvider>
  );
}

export default App;

//// Packages
//import React, { useEffect } from 'react';
//import { useDispatch } from "react-redux";
//
//// Local
//import { fetchInstitutionData } from "./redux/store/institutionSlice";
//import { fetchUserData } from "./redux/store/userSlice";
//import RoutesContainer from './routes';
//import { fetchProductData } from "./redux/store/productSlice";
//
//
//// Code
//const App = () => {
//  const dispatch = useDispatch();
//
//  useEffect(() => {
//    dispatch(fetchInstitutionData());
//    dispatch(fetchUserData());
//    dispatch(fetchProductData());
//  }, []);
//
//  return (
//    <RoutesContainer />
//  )
//}
//
//export default App;
