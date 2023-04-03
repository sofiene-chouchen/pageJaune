import React from "react";
import logo from "../images/logo.png";
export default function NavBar() {
  return (
    <div className="shadow-lg my-3">
      <div className="md:container m-auto py-4">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
