//libs
import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
//components
import { Counter } from "./features/counter/Counter";
import MainNavbar from './components/MainNavBar.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar/>
        <Counter />

        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
