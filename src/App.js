import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import Home from "./component/Home";
import React, { useState, useEffect } from "react";
import { LoginUI } from "./component/LogIn";
import Covid from "./component/Covid";
import Recipes from "./component/Recipes"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div>
        <h2 className="customhead">Welcome to Kofoednet.systems</h2>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/fetchCovid">Fetch covid info</NavLink>
          </li>
          <li>
            <NavLink to="/fetchRecipes">Fetch Recipes</NavLink>
          </li>
        </ul>
        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginUI />} />
            <Route path="/fetchCovid" element={<Covid />} />
            <Route path="/fetchRecipes" element={<Recipes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}