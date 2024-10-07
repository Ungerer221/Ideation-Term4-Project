import React, { useEffect, useState } from "react";
import styles from './signupPageStyle.module.scss';
import { useNavigate } from "react-router-dom";

// icons
import Smily from '../../assets/icons/look-top-stroke-rounded.svg';
import loginIcon from '../../assets/icons/login-circle-01-stroke-rounded.svg';
import lockMethod from '../../assets/icons/login-method-stroke-rounded.svg';

// assets
import LargeHaz from '../../assets/hazzardart/largehazzardart.svg';
import { handleSignup } from "../../services/authService";

function SignupPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());

    const handleUserCreation = async () => {
        var items = { username, email, password, date }
        var success = handleSignup(email, password, items)
    }

    const signup = () => { handleUserCreation() }

    return (
        <div className={styles.signupPageMainContainer}>
            <div className={styles.LargeHaz01Con}>
                <img src={LargeHaz} alt="" />
            </div>
            <div className={styles.sencondaryCon}>
                <div className={styles.signupPageBannerCon}>
                    <h2>Welcome to your new art idea generator</h2>
                    <img src={Smily} alt="" />
                </div>
                <div className={styles.signupFormContainer}>
                    <div className={styles.signupForm}>
                        <div className={styles.formTileCon}>
                            <h1>Signup</h1>
                            <p>Welcome! First Time Here?</p>
                            <p>Just Give us all your details</p>
                        </div>
                        <div className={styles.signupInputFields}>
                            {/* //* USERNAME */}
                            <div className={styles.signupEmailInputCon}>
                                <label for="username">username</label>
                                <div className={styles.emailInput}>
                                    <input
                                        placeholder="username"
                                        name="username"
                                        type="text"
                                        onChange={newText => setUsername(newText)}
                                    />
                                    <img src={loginIcon} alt="" />
                                </div>
                            </div>
                            {/* //* EMAIL */}
                            <div className={styles.signupEmailInputCon}>
                                <label for="email">email</label>
                                <div className={styles.emailInput}>
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        type="text"
                                        onChange={newText => setEmail(newText)}
                                    />
                                    <img src={loginIcon} alt="" />
                                </div>
                            </div>
                            {/* //* PASSWORD */}
                            <div className={styles.signupEmailInputCon}>
                                <label for="password">password</label>
                                <div className={styles.emailInput}>
                                    <input
                                        placeholder="Shhhh it's a secret ;)"
                                        name="password"
                                        type="text"
                                        onChange={newText => setPassword(newText)}
                                    />
                                    <img src={lockMethod} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>If you don't already have an account you can <button onClick={() => navigate("/")}>Login</button> here</p>
                            </div>
                        </div>
                        <button onClick={signup} className={styles.signupButton}>
                            <p>Signup</p>
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
export default SignupPage