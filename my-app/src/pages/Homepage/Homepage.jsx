import React from "react";
import styles from "./HomepageStyle.module.scss";
import anime from 'animejs';

// assets
import SmallHazzardArt from '../../assets/hazzardart/smallhazzardart.svg'
import LargeHazzArt from '../../assets/hazzardart/largehazzardart.svg'

function Throw() {
    anime({
        targets: '.imageConFront',
        translateX: 500,
        translateY: 20,
        rotate: '120',
        borderRadius: ['100%', '10%'],
        scale: 2,
    })
    anime({
        targets: '.imageConBack',
        translateX: 400,
        translateY: 50,
        rotate: '450',
        borderRadius: ['100%', '10%'],
        scale: 1.5,
    })
}

function Homepage() {
    return (
        <div className={styles.homePageMainContainer}>
            {/* left side */}
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
            {/* right side */}
            <div className={styles.homePageRightColumn}>
                <div className={styles.hazzardSmallCon}>
                    <img src={SmallHazzardArt} alt="art" />
                </div>
                <div className={styles.rightsideLandingImageCon}>
                    <div className={styles.imageConFront}></div>
                    <div className={styles.imageConBack}></div>
                </div>
                <div className={styles.landingButtonCon}>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;