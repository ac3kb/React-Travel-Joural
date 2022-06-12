import React from 'react';

import logo from "../../images/logo.png"
import "./Header.css";

function Header(){
    return(
        <div className='container-head'>
            <img className='logo' src={logo}/>
            <p className='logo-text'>my travel journal.</p>
        </div>
    )
}

export default Header;