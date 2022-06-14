import React from "react";
import { Solver } from "pages/solver";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:board" element={<Solver />} />
      </Routes>
    </BrowserRouter>
  );
};
