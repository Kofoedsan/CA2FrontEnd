import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";

import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import LoggedIn from "./LoggedIn";
import LogIn from "./LogIn";
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
        <h2 class="customhead">Welcome to Kofoednet.systems</h2>

        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <h2 class="logincss">
            <NavLink
              to="/Login"
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={{ color: "white", textDecoration: "none" }}
            >
              Login
            </NavLink>
          </h2>
        </ul>
        <hr />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Kofoednet.systems</h2>
      <p>On this site you'll find a varation of small tasks and projects.</p>
      <p>
        <a href="https://reactrouter.com/web/example/basic">
          {" "}
          Made with react router:
        </a>{" "}
      </p>
    </div>
  );
}

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
