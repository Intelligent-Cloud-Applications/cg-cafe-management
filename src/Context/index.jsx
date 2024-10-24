import React, { createContext, useState } from 'react';
import { institution } from '../utils/constants';

// Create the context
const Context = createContext({});

// Create a provider component
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [userData, setUserData] = useState({});
  const [institutionData, setInstitutionData] = useState({ InstitutionId: institution, PrimaryColor: 'blue' });
  const [loader, setLoader] = useState(false);

  return (
    <Context.Provider value={{
      isAuth, setIsAuth,
      userData, setUserData,
      institutionData, setInstitutionData,
      loader, setLoader
    }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
