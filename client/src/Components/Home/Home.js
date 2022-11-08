import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Landing/Main";
import Nav from "../Navbar/Navbar";

function Home() {
  return (
      <div className="home_navigation">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>

  );
}

export default Home;
