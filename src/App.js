import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleCountry/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
