import React from "react";
import Logo from '../../assets/img/logo.png'
import style from './Header.module.scss';
import {NavLink, useHistory} from "react-router-dom";
import {auth} from "../../firebase";

function Header() {

    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    return(
        <header className={`${style.header} d-flex justify-content-between p-3 mt-2`}>
            <NavLink exact to="/" className={ style.logo }>
                <img src={ Logo } alt=""/>
            </NavLink>
            <div className={ style.loginBtn }>
                <button onClick={ handleLogout }>LogOut</button>
            </div>
        </header>
    )
}

export default Header;