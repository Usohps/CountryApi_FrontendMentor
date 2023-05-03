import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import { useState,createContext } from "react";

export const ThemeContext = createContext(null)
function App() {
  const [mode,setMode]=useState("light")
  return (
  <ThemeContext.Provider value={{mode, setMode}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleCountry/>} />
      </Routes>
    </BrowserRouter>
  </ThemeContext.Provider>
  );
}
export default App;
