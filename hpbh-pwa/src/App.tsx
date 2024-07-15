import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import GameDays from "@pages/GameDays";
import Gallery from "@pages/Gallery";
import LoginSignup from "@pages/LoginSignup";
import About from "@pages/About";

import { PATHS } from "@constants/index";

import "./App.css";
import Footer from "@components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={PATHS.GAME_DAYS} element={<GameDays />} />
          <Route path={PATHS.GALLERY} element={<Gallery />} />
          <Route path={PATHS.LOGIN_SIGNUP} element={<LoginSignup />} />
          <Route path={PATHS.ABOUT} element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
