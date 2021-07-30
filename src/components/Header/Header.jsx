import React from "react";
import Logo from '../../assets/img/logo.png'
import style from './Header.module.scss';
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <header className={`${style.header} d-flex justify-content-between p-3 mt-2`}>
            <NavLink exact to="/" className={ style.logo }>
                <img src={ Logo } alt=""/>
            </NavLink>
            <div className="login">
                <span>Login</span>
            </div>
        </header>
    )
}

export default Header;