import React, { useState } from "react";
import styles from './ProfilePageStyle.module.scss'

function ProfilePage() {

    const [activeButton, setActiveButton] = useState('posts'); 

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={styles.ProfilePageMainContainer}>
            {/* //* Left side...................................................................... */}
            <div className={styles.portfolioPageLeftContainer}>
                <div className={styles.ProfilePageBannerCon}>
                    <p>banner</p>
                </div>
                <div className={styles.portTextCon}>
                    <h2> you're posts</h2>
                </div>
                <div className={styles.protContent}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
                <div>
                    <p>see more</p>
                </div>
                <div className={styles.selectionBox}>
                    {/* <button className={styles.postsSelectButton}>posts</button> */}
                    <button onClick={() => handleButtonClick('posts')} className={activeButton === 'posts' ? styles.activeButton : styles.postsSelectButton}>posts</button>
                    <button onClick={() => handleButtonClick('ideas')} className={activeButton === 'ideas' ? styles.activeButton : ''}>ideas</button>
                    <button onClick={() => handleButtonClick('saved')} className={activeButton === 'saved' ? styles.activeButton : ''}>saved</button>
                </div>
            </div>
            {/* //* right side..................................................................... */}
            <div className={styles.portfolioPageRightContainer}>
                <div className={styles.profilePageProfileTileCon}>
                    <div className={styles.profileTileImgCon}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={styles.profileTileUserInfoCon}>
                        <h2>username</h2>
                        <p>Bio</p>
                        <div className={styles.followersandFollowingCon}>
                            <div className={styles.fInfoCon}>
                                <p>followers</p>
                                <h3>80</h3>
                            </div>
                            <div className={styles.fInfoCon}>
                                <p>following</p>
                                <h3>800</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage