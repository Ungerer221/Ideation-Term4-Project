import React, { useState, useEffect, useRef } from "react";
// import styles from "./NavbarStyle.module.scss";
import styles from "./NavbarStyle.module.scss"
import { useNavigate, useLocation } from "react-router-dom";

// importing assets
import SmallLogo from '../../assets/LogoSmall.svg'
import MenuIcon from '../../assets/menuIcon.svg'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className={styles.NavbarMainCon}>
            {/* logo con */}
            <div className={styles.logoAndNameCon}>
                <img src={SmallLogo} alt="logo" />
                <h1>IDEATION</h1>
            </div>
            {/* router con */}
            <div className={styles.routeNavCon}>
                <div className={styles.navTab} onClick={() => navigate("/home")}>
                    <div
                        className={`${styles["textWrapperTab"]} ${isActive("/home") ? styles.active : ""}`}
                    >HOME</div>
                </div>
                <div className={styles.navTab} onClick={() => navigate("/profile")}>
                    <div
                        // className={`${styles["text-wrapper-tab"]} ${isActive("/home") ? styles.active : ""}`}
                        className={`${styles["textWrapperTab"]} ${isActive("/profile") ? styles.active : ""}`}
                    >PROFILE</div>
                </div>
                <div className={styles.navTab} onClick={() => navigate("/generate")}>
                    <div
                        // className={`${styles["text-wrapper-tab"]} ${isActive("/home") ? styles.active : ""}`}
                        className={`${styles["textWrapperTab"]} ${isActive("/generate") ? styles.active : ""}`}
                    >GENERATE</div>
                </div>
                <div className={styles.navTab} onClick={() => navigate("/community")}>
                    <div
                        // className={`${styles["text-wrapper-tab"]} ${isActive("/home") ? styles.active : ""}`}
                        className={`${styles["textWrapperTab"]} ${isActive("/community") ? styles.active : ""}`}
                    >COMMUNITY</div>
                </div>
            </div>
            {/* menu con */}
            <div className={styles.navMenuCon}>
                <img src={MenuIcon} alt="" />
            </div>
        </div>
    );
}

export default Navbar;