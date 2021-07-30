import React from "react";
import style from './Login.module.scss'
import Logo from '../../assets/img/logo.png'
import { Google, Facebook } from "react-bootstrap-icons";
import firebase from "firebase/app";

import { auth } from "../../firebase";

const Login = () => {
    return(
        <div id={style.loginPage}>
            <div className={`${style.loginCard} d-flex flex-wrap justify-content-center`}>
                <h2 className='mb-4'>Welcome To <img className={style.logo} src={ Logo } alt=""/>!</h2>
                <div
                    className={`${style.loginBtn} ${style.loginBtnGoogle}`}
                    onClick={ () => auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider() ) }
                >
                    <Google/> Sign In With Google
                </div>
                <div
                    className={`${style.loginBtn} ${style.loginBtnFacebook}`}
                    onClick={ () => auth.signInWithRedirect( new firebase.auth.FacebookAuthProvider() ) }
                >
                    <Facebook/> Sign In With Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;