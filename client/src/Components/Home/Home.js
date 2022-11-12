import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Landing/Main";
import Nav from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Explore from "../Explore/Explore";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import About from "../About/About";

function Home() {
  return (
      <div className="home_navigation">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>

  );
}

export default Home;
