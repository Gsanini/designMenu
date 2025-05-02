"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuName, setMenuName] = useState("Dashboard");
  const [selectedItem, setSelectedItem] = useState("Visão Geral");

  const updateMenuName = (name) => {
    setMenuName(name);
  };

  const updateSelectedItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <GlobalContext.Provider
      value={{ menuName, selectedItem, updateMenuName, updateSelectedItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
