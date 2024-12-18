import React, { useState, useEffect, useRef } from "react";
import styles from "./HomepageStyle.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import anime from 'animejs';

// icons
import GenIcon from '../../assets/icons/genIcon.svg'

// images 
import DeadpoolBackground from '../../assets/images/helmat.jpg';
import BackgorundImageOne from '../../assets/images/wizard.jpg';

// assets
import SmallHazzardArt from '../../assets/hazzardart/smallhazzardart.svg'
import LargeHazzArt from '../../assets/hazzardart/largehazzardart.svg'
import { handleLogout } from "../../services/authService";


function Homepage() {

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logout = () => {
        handleLogout(email, password)
        console.log("pressed")
    }

    return (
        <div className={styles.HomepageMainContainer}>
            {/* //* Landing section /////////////////////////////////////////////////////////////// */}
            <div className={styles.homePageMainLandingContainer}>
                {/* //* left side...................................................................... */}
                <div className={styles.homePageLeftColumn}>
                    <div className={styles.homepageLandingTextCon}>
                        <h1>ideation</h1>
                        <h2>un-blocked</h2>
                        <p>
                            Your new art idea genertor Tool. Feeling that dreaded art block or just want to change things up a bit and experiment with new ideas
                            this is the place for you.
                        </p>
                    </div>
                    <img src={LargeHazzArt} alt="art" />
                </div>
                {/* //* right side..................................................................... */}
                <div className={styles.homePageRightColumn}>
                    <div className={styles.hazzardSmallCon}>
                        <img src={SmallHazzardArt} alt="art" />
                    </div>
                    <div className={styles.rightsideLandingImageCon}>
                        <div className={styles.imageConFront}>
                            <img src={DeadpoolBackground} alt="" />
                        </div>
                        <div className={styles.imageConBack}>
                            <img src={BackgorundImageOne} alt="" />
                        </div>
                    </div>
                    {/* //* landing page button */}
                    <div className={styles.landingButtonCon}>
                        <button className={styles.aboutUsButton}>About us</button>
                        <button className={styles.HomepageGenButton} onClick={() => navigate("/generate")}>
                            <p>generate</p>
                            <img src={GenIcon} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
            {/* //* More Info ///////////////////////////////////////////////////////////////////// */}
            <div className={styles.homePageLogoutSection}>
                <h1>!warning!</h1>
                <button onClick={logout} className={styles.homeLogouButton}>Logout</button>
            </div>
        </div>
    );
}

export default Homepage;