import React from "react";
import CardWIdget from './components/cartWIdget'

const NavBar = () => {
    return (
      <nav className="navbar">
        <a>Velas</a>
        <a>Bombones</a>
        <a><CardWIdget/></a>
      </nav>
    )
}


export default NavBar;
