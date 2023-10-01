import React, { createContext, useContext } from "react";
import useGlobalContextApp from "./useGlobalContextApp";

const GlobalContextApp = createContext({
  createUser: () => {},
  getUserById: ()=>{},
  getPosts: () => {},
  listPosts: null,
  error: null,
  infoAuth: null,
  setInfoAuth: () => {},
  newUser: null,
  setNewUser:()=>{},
  userById: null,
  setUserById:()=>{},
  getCommentsByPost:()=>{},
  commentsByPost: null,
  postProfile: null
});

export function GlobalContextAppProvider({ children }) {
  const setupTitaMediaContextData = useGlobalContextApp();
  return (
    <GlobalContextApp.Provider value={setupTitaMediaContextData}>
      {children}
    </GlobalContextApp.Provider>
  );
}

export const useGlobalApp = () => useContext(GlobalContextApp);
