import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./view/LandingPage/LandingPage";
import Home from "./view/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";
import SearchBar from "./components/SearchBar/SearchBar";
import Detail from "./view/Detail/Detail";
import NotFound from "./view/NotFound/NotFound";
import Update from "./components/Update/Update";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <LandingPage /> : <NavBar />}
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/cards"} element={<Cards />} />
        <Route path={"/search"} element={<SearchBar />} />
        <Route path="/createVideoGame" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
