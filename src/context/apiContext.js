import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { API_ENDPOINT } from '../constants/api';

const APIContext = React.createContext(null);

const APIProvider = ({ children }) => {
  return (
    <APIContext.Provider
      value={
        useFetchData({
          defaultEndpoint: API_ENDPOINT
        })
      }
    >
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };
export default APIContext;