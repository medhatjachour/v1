//libs
import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Type from "./pages/Type";
import Signup from './pages/Signup'
import Login from './pages/Login'
import BuyerAccount from "./pages/BuyerAccount";
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
        {/* <div className="myApp"> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Product/:id" element={<ProductPage />} className="myApp"/>
          <Route path="/Type/:id" element={<Type />} className="myApp" />
          <Route path="/login" element={<Login />} className="myApp"/>
          <Route path="/signup" element={<Signup />} className="myApp"/>
          <Route path="/BuyerAccount/*" element={<BuyerAccount />} className="myApp"/>
        </Routes>
        {/* </div> */}
    </>
  );
}

export default App;
