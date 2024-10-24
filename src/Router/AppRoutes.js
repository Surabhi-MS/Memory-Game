import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemoryGame from "../components/MemoryGame";

const AppRoutes = () => {
  return (
    <div className="game-conatiner">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemoryGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
