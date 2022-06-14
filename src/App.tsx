import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./app-router";

export const App = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <AppRouter />
    </BrowserRouter>
  );
};
