import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/categories/:name" element={<Second />} />
    </Routes>
  );
}

export default App;
