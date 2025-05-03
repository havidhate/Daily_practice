import React from "react";
import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </>
  );
}
