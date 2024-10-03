import React, { useState } from "react";
import styles from './loginPageStyle.module.scss';
import { handleLogin } from "../../services/authService";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => { handleLogin(email, password) }

    return (
        <div>
            <h2>Login Page</h2>
            <div className={styles.loginFormContainer}>
                <div className={styles.loginForm}>
                    <div className={styles.loginInputFields}>
                        <div className={styles.loginEmailInputCon}>
                            <label for="email">email</label>
                            <input name="email" type="text" />
                        </div>
                        <div className={styles.loginEmailInputCon}>
                            <label for="password">password</label>
                            <input name="password" type="text" />
                        </div>
                    </div>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;