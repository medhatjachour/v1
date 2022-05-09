//libs
import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Type from "./pages/Type";
//components
//import { Counter } from "./features/counter/Counter";
import MainNavbar from './components/MainNavBar.tsx'
//import RouterBreadcrumbs from './Views/BreadMap.tsx'
function App() {
  return (
    <>
        <MainNavbar/>
       {/*
      <RouterBreadcrumbs/>
        <Counter />
      */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route path="/Type/:id" element={<Type />} />
        </Routes>
    </>
  );
}

export default App;
