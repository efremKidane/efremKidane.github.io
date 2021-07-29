import React, { createContext, useState, useReducer } from "react";

export const UserContext = createContext();

export const intialState = {
  homePage: "home",
  token: "",
};

export const myReducer = (state = intialState, action) => {
  switch (action.type) {
    case "REQUEST_APPOINTMENT":
      return { ...state, homePage: action.payload };
    case "TOKEN":
      return { ...state, token: action.payload };
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, intialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
