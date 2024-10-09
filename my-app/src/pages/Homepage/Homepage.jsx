import React, { useState, useEffect, useRef } from "react";
import styles from "./HomepageStyle.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import anime from 'animejs';

// icons
import GenIcon from '../../assets/icons/genIcon.svg'

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
                            Borem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            Class aptent taciti sociosqu
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
                        <div className={styles.imageConFront}></div>
                        <div className={styles.imageConBack}></div>
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
            <div>
                <h1>warning</h1>
                <p>logout here</p>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Homepage;