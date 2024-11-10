import React, { useEffect, useState } from "react";
import styles from './ProfilePageStyle.module.scss'
import { getUserItem } from "../../services/userService";
import { getLoggedinUser } from "../../services/authService";
import UserPosts from "../../components/currentUserPost/currentUserPost";
import UserGenIdeas from "../../components/currentUserIdeas/CurrentUserGenIdeas";

// Icons 
import ProfileLogo from "../../assets/LogoSmall.svg"

// Spinner
import { SpinnerCircularSplit } from 'spinners-react';

function ProfilePage() {

    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [activeButton, setActiveButton] = useState('posts');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    // getting the current user data
    const handleGettingUserData = async () => {
        var userData = await getUserItem()
        setUser(userData)
    }
    useEffect(() => {
        handleGettingUserData() // give me an error of no document
        getLoggedinUser() //displays the logged in user UID
    }, []);

    // * Loading Spinner //////////////////////////////////
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            setLoading(true); // Start loading
            // Replace this with your actual data fetch logic
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate fetch delay
            setLoading(false); // End loading
        };

        fetchData();
    }, [activeButton]);

    // const ideasContent = `Certainly! It sounds like you're interested...`; 

    return (
        <div className={styles.ProfilePageMainContainer}>
            {/* //* Left side...................................................................... */}
            <div className={styles.portfolioPageLeftContainer}>
                <div className={styles.ProfilePageBannerCon}>
                    {/* <p>banner</p> */}
                </div>
                <div className={styles.portTextCon}>
                    {/* <h2> you're posts</h2> */}
                </div>
                <div className={styles.protContentCon}>
                    {/* Conditional rendering based on the view */}
                    {loading ? (
                        <div>
                            <SpinnerCircularSplit />
                        </div>
                    ) : (
                        <div className={styles.protContent}>
                            {activeButton === 'posts' ? <UserPosts /> : <UserGenIdeas />}
                        </div>

                    )}
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
                        <img src={ProfileLogo} alt="" />
                    </div>
                    <div className={styles.profileTileUserInfoCon}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <p>Bio</p>
                        <div className={styles.followersandFollowingCon}>
                            <div className={styles.fInfoCon}>
                                <p>followers</p>
                                <h3>0</h3>
                            </div>
                            <div className={styles.fInfoCon}>
                                <p>following</p>
                                <h3>0</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage