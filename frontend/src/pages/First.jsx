import React from "react";
import Data from "../components/Data";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Offre from "../components/Offre";
export default function First() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Data />
      <Offre />
      <Footer />
    </div>
  );
}
