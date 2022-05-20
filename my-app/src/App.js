//libs
import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Type from "./pages/Type";
import Signup from './pages/Signup'
import Login from './pages/Login'
//components
//import { Counter } from "./features/counter/Counter";
import MainNavbar from './components/MainNavBar'
//import RouterBreadcrumbs from './Views/BreadMap'
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
}

export default App;
