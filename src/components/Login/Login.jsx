import React from "react";
import style from './Login.module.scss'
import { Google, Facebook } from "react-bootstrap-icons";

const Login = () => {
    return(
        <div id={style.loginPage}>
            <div className={`${style.loginCard} d-flex flex-wrap justify-content-center`}>
                <h2 className='mb-4'>Welcome To BellaChat!</h2>
                <div className={`${style.loginBtn} ${style.loginBtnGoogle}`}>
                    <Google/> Sign In With Google
                </div>
                <div className={`${style.loginBtn} ${style.loginBtnFacebook}`}>
                    <Facebook/> Sign In With Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;