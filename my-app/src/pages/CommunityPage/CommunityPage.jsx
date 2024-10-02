import React, { useEffect, useState } from "react";
import styles from './CommunityStyle.module.scss'

// components
import RandomDrinks from '../../components/randomwordComps/RandomDrinks/RandomDrinks';
import RandomActions from '../../components/randomwordComps/RandomActions';
import RandomAdjectives from '../../components/randomwordComps/RandomAdjectives';

// MUI
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Icons
import CommunityIconBubble from '../../assets/icons/bubble-chat-stroke-rounded.svg'

function CommunityPage() {

    const heights = [150, 350, 670, 425, 450, 350, 425, 150, 670, 540, 150, 350, 670, 425, 450, 350, 425, 150, 670, 540];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#FF5C37',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    // would work on a booleen value
    // const buttonClick = false
    const [activeButton, setActiveButton] = useState('all');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }


    // changing the value of button click
    // how are you going to change the styleing with css in js
    // to show which class to render
    // if false reneder style 1
    // if true then render style 2
    // search how to change what class an element uses an dhow to change it with an if statement

    // const isActive = (buttonClick) => {

    // }

    return (
        <div className={styles.communityPageMainContainer}>
            <div className={styles.communityTopBanner}>
                <div className={styles.titleCon}>
                    <h1>welcome to the community</h1>
                    <img src={CommunityIconBubble} alt="icon" />
                </div>
                <div className={styles.communityTopBannerParaText}>
                    {/* have the highlighted text variable that randomly change every minute so like the coffee will change to be different drinks */}
                    <p>Grab a </p>
                    <p className={styles.higlightedText}><RandomDrinks /></p>
                    <p>sit down and </p>
                    <p className={styles.higlightedText}><RandomActions /></p>
                    <p > all the </p>
                    <p className={styles.higlightedText}><RandomAdjectives /></p>
                    <p > Enjoy.</p>
                    {/* <div>Grab a <div className={styles.higlightedText}>coffee</div>, <div className={styles.higlightedText}>chill</div>, and browse through all the amazingness. <div className={styles.higlightedText}>Enjoy.</div></div> */}
                </div>
            </div>
            <div className={styles.CommunityPageContentDisplay}>
                <div className={styles.timeframeSwitch}>
                    {/* <button id="allButton" onClick={handleClick} className={styles.allTime}>all</button> */}
                    <button onClick={() => handleButtonClick('all')} className={activeButton === 'all' ? styles.activeButton : styles.allSelectButton}>all</button>
                    <button onClick={() => handleButtonClick('today')} className={activeButton === 'today' ? styles.activeButton : styles.allSelectButton}>today</button>
                </div>
                {/* <div className={styles.timeframeSwitch}>
                    <button className={styles.allTime}>all</button>
                    <button className={styles.todayTime}>today</button>
                </div> */}
                <h4>check all the other humans creations</h4>
                {/* 5-6 columns */}
                {/* <div className={styles.contentDisplay}>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                    <div className={styles.cardExample}></div>
                </div> */}
                <div className={styles.masonryBox}>
                    <Masonry columns={6} spacing={2}>
                        {heights.map((height, index) => (
                            <Item className={styles.cardExample} key={index} sx={{ height }}>
                                {index + 1}
                            </Item>
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    )
}
export default CommunityPage