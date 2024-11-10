import React, { useState } from "react";
import styles from './loginPageStyle.module.scss';
import { handleLogin } from "../../services/authService";
import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext"; // from auth context

// icons
import Smily from '../../assets/icons/look-top-stroke-rounded.svg';
import loginIcon from '../../assets/icons/login-circle-01-stroke-rounded.svg';
import lockMethod from '../../assets/icons/login-method-stroke-rounded.svg';

// assets
import LargeHaz from '../../assets/hazzardart/largehazzardart.svg';

// pages
// import SignupPage from '../SignUpPage/'

function LoginPage() {

    const navigate = useNavigate();

    // const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => { 
        handleLogin(email, password)
        navigate('/');
     }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={styles.loginPageMainContainer}>
            <div className={styles.LargeHaz01Con}>
                <img src={LargeHaz} alt="" />
            </div>
            <div className={styles.sencondaryCon}>
                <div className={styles.loginPageBannerCon}>
                    <h2>Welcome back to your faveriot art idea generator</h2>
                    <img src={Smily} alt="" />
                </div>
                <div className={styles.loginFormContainer}>
                    <div className={styles.loginForm}>
                        <div className={styles.formTileCon}>
                            <h1>Login</h1>
                            <p>Welcome back!</p>
                        </div>
                        <div className={styles.loginInputFields}>
                            <div className={styles.loginEmailInputCon}>
                                <label for="email">email</label>
                                <div className={styles.emailInput}>
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <img src={loginIcon} alt="" />
                                </div>
                            </div>
                            <div className={styles.loginEmailInputCon}>
                                <label for="password">password</label>
                                <div className={styles.emailInput}>
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    // value={setPassword}
                                    />
                                    <button onClick={togglePasswordVisibility} className={styles.passwordToggleButton}>
                                        <img src={lockMethod} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p>If you don't already have an account you can <button onClick={() => navigate("/")} className={styles.signUpNavBtn}>Signup</button> here</p>
                                {/* <button onClick={() => navigate("/test")}>TestPage</button> */}
                            </div>
                        </div>
                        <button onClick={login} className={styles.loginButton}>
                            <p>login</p>
                            <img src={lockMethod} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.LargeHaz01Con}>
                <img src={LargeHaz} alt="" />
            </div>
        </div>
    )
}
export default LoginPage;