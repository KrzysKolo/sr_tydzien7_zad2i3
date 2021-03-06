import React,  { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

  return (
    <UserContext.Provider value={{}}>
			{ props.children }
    </UserContext.Provider>
  );
};
export default UserContextProvider;