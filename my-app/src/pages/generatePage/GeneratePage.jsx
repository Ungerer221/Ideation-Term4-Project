import React from "react";
import styles from './GeneratePageStyle.module.scss'

// icons
import MenuIcon from '../../assets/menuIcon.svg'

// assets
import SmallHazzardArt from '../../assets/hazzardart/smallhazzardart.svg'
import LargeHazzArt from '../../assets/hazzardart/largehazzardart.svg'
import PowerButton from '../../assets/GenPage/power.svg'
import GenRing01 from '../../assets/GenPage/Ellipse01.svg'
import GenRing02 from '../../assets/GenPage/Ellipse02.svg'
import GenRing03 from '../../assets/GenPage/Ellipse03.svg'
import GenRing04 from '../../assets/GenPage/Ellipse04.svg'
import GenRing05 from '../../assets/GenPage/Ellipse05.svg'
import GenRing06 from '../../assets/GenPage/Ellipse06.svg'



function GeneratePage() {

function power(){
    alert("Power button Active")
}

    return (
        <div className={styles.GeneratePageMainContainer}>
            <div className={styles.titleContainer}>
                <h1>Generate</h1>
                <div>
                    {/* <img src={MenuIcon} alt="icon" /> */}
                </div>
            </div>
            <div className={styles.generationButtonSection}>

                <button onClick={power} className={styles.powerButtonCon}>
                    <img src={PowerButton} alt="" />
                </button>

                <div className={styles.genRingCon01}>
                    <img src={GenRing01} alt="" />
                </div>
                <div className={styles.genRingCon02}>
                    <img src={GenRing02} alt="" />
                </div>
                <div className={styles.genRingCon03}>
                    <img src={GenRing03} alt="" />
                </div>
                <div className={styles.genRingCon04}>
                    <img src={GenRing04} alt="" />
                </div>
                <div className={styles.genRingCon05}>
                    <img src={GenRing05} alt="" />
                </div>
                <div className={styles.genRingCon06}>
                    <img src={GenRing06} alt="" />
                </div>

            </div>
        </div>
    )
}
export default GeneratePage