//libs
import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
//components
//import { Counter } from "./features/counter/Counter";
import MainNavbar from './components/MainNavBar.tsx'

function App() {
  return (
    <>
        <MainNavbar/>
       {/*
        <Counter />
      */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Product/:id" element={<ProductPage />} />
        </Routes>
    </>
  );
}

export default App;
