import React, { createContext, useState, useEffect } from "react";



export const ColorContext = createContext();

const ColorContextProvider = (props) => {
 

const activeColor = "rgb(241, 53, 109)";
const nonActiveColor = "rgba(187, 187, 187, 0.58)";
const currentColor = "white";




  return (
    <ColorContext.Provider
      value={{
        activeColor,
        nonActiveColor,
        currentColor
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;