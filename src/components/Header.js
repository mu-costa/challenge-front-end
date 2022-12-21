import React from "react";
import LOGO_GITHUB from '../img/logo_github.png';
import '../css/Header.css';

function Header () {
    return(
        <div className="header">
            <img
              alt="logo github"
              src={LOGO_GITHUB}
            />
            <h1>Challenge Shaw and Partners Front-End</h1>
        </div>
    )
}

export default Header;