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
import { Modal } from '@mui/base/Modal';

// Icons
import CommunityIconBubble from '../../assets/icons/bubble-chat-stroke-rounded.svg';
import PlusDottedCircle from '../../assets/icons/add-circle-half-dot-stroke-rounded.svg';
import AddMediaModel from "../../components/addMediaModel/addMediaModel";
import { collectionGroup, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import PostDetailsModel from "../../components/postDetailsModel/postDetailModel";



function CommunityPage() {
    // would work on a booleen value
    // const buttonClick = false
    const [posts, setPosts] = useState([]);
    const [activeButton, setActiveButton] = useState('all');
    const [filteredPosts, setFilteredPosts] = useState([]);

    // const handleButtonClick = (buttonName) => {
    //     setActiveButton(buttonName);
    // }

    // ? can make it another componenet - calling all posts posted by users

    useEffect(() => {
        // TODO move into post service 
        const fetchAllPosts = async () => {
            // really understand what is happening here 
            try {
                const querySnapshot = await getDocs(collectionGroup(db, "posts")); // to query subcollections with same name accross all users
                // extract each post
                const allPostsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setPosts(allPostsData); // setting state
                setFilteredPosts(allPostsData);
            } catch (error) {
                console.log("error fetching posts", error);
            }
        }
        fetchAllPosts();
    }, []);

    const handleModelOpen = () => {
        <PostDetailsModel />
        console.log("click")
    }

    // * FILTERING fUNCTIONALITY ////////////////////////////////////////////
    const handleButtonClick = (filter) => {
        setActiveButton(filter);

        if (filter === 'today') {
            const now = new Date();
            const past24Hours = new Date(now.getTime() - (24 * 60 * 60 * 1000));

            // Filter posts where the timestamp is greater than or equal to 24 hours ago
            const todayPosts = posts.filter(posts => {
                const postTimestamp = posts.timestamp?.toDate();
                return postTimestamp && postTimestamp >= past24Hours;
            });

            setFilteredPosts(todayPosts);
            console.log(todayPosts) // works but doesnt change the display
        } else {
            setFilteredPosts(posts);
        }
    };

    // * return ////////////////////
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
                    <button onClick={() => handleButtonClick('all')} className={activeButton === 'all' ? styles.activeButton : styles.allSelectButton}>all</button>
                    <button onClick={() => handleButtonClick('today')} className={activeButton === 'today' ? styles.activeButton : styles.allSelectButton}>today</button>
                </div>
                <h4>check all the other humans creations</h4>
                <div className={styles.masonryBox}>
                    <Masonry columns={6} spacing={1} style={{ backgroundColor: "" }}>
                        {filteredPosts.map((post) => (
                            <div key={post.id} className={styles.imageCard} >
                                <img
                                    src={post.imageUrl}
                                    alt="Post"
                                    style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "12px", cursor: "pointer" }}
                                />
                                <div>
                                    <p>{post.imageName}</p>
                                    {/* <p>Posted on: {post.timestamp?.toDate().toLocaleString()}</p> //Optional timestamp */}
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
            <div className={styles.ModalContainer}>
                <AddMediaModel />
            </div>
        </div>
    )
}
export default CommunityPage