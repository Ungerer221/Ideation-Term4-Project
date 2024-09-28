import React from "react";
import styles from './CommunityStyle.module.scss'

// MUI
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

    return (
        <div className={styles.communityPageMainContainer}>
            <div className={styles.communityTopBanner}>
                <h1>welcome to the community</h1>
                <div className={styles.communityTopBannerParaText}>
                    {/* have the highlighted text variable that randomly change every minute so like the coffee will change to be different drinks */}
                    <p>Grab a </p>
                    <p className={styles.higlightedText}>Coffee</p>
                    <p>and</p>
                    <p className={styles.higlightedText}>Chill</p>
                    <p > and browse through all the</p>
                    <p className={styles.higlightedText}>Amazingness.</p>
                    <p >Enjoy.</p>
                    {/* <div>Grab a <div className={styles.higlightedText}>coffee</div>, <div className={styles.higlightedText}>chill</div>, and browse through all the amazingness. <div className={styles.higlightedText}>Enjoy.</div></div> */}
                </div>
            </div>
            <div className={styles.CommunityPageContentDisplay}>
                <div className={styles.timeframeSwitch}>
                    <button className={styles.allTime}>all</button>
                    <button className={styles.todayTime}>today</button>
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