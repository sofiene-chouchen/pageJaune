import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="shadow-lg my-3">
      <div className="md:container m-auto py-4">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}
