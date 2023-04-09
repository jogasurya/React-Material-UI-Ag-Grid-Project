import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navBar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}
