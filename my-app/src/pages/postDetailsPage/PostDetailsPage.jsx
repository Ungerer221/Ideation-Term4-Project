import React from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from './postDetailsPageStyle.module.scss';

function PostDetailPage() {
    const navigate = useNavigate();

    const { userId, postId } = useParams();
    const [post, setPost] = useState(null);

    // TODO fetch the document in the posts collection that matches the id that is passed
    useEffect(() => {
        // arrow function to fetch post data
        const fetchPost = async () => {
            try {
                const postRef = doc(db, 'users', userId, 'posts', postId);
                const postSnap = await getDoc(postRef);

                // if there is a doc then set the state with data
                if (postSnap.exists()) {
                    const postData = postSnap.data();
                    console.log("Fetched post data:", postData);
                    setPost(postSnap.data());
                } else {
                    console.log("No such document!");
                }

            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [userId, postId]);

    // useEffect(() => {
    //     const fetchPost = async () => {
    //       try {
    //         const postRef = doc(db, 'users' ,userId, 'posts', postId); // Adjust if posts collection is global
    //         const postSnap = await getDoc(postRef);
    //         if (postSnap.exists()) {
    //           setPost(postSnap.data());
    //         } else {
    //           console.log("No such document!");
    //         }
    //       } catch (error) {
    //         console.error("Error fetching post:", error);
    //       }
    //     };

    //     fetchPost();
    //   }, [postId]);

    // console.log('userId:', userId, 'postId:', postId);

    console.log('post id', postId)
    console.log("hello", post)

    if (!post) return <p>Loading...</p>

    return (
        <div className={styles.postDetailsPageMainContainer}>
            {/* to prevent rendering undefined or null data */}
            <button onClick={() => navigate('/community')}>Back</button>
            <div className={styles.postDetailsImageSection}>
                <div className={styles.PostDetailImageCon}>
                    <img src={post?.imageUrl || ""} alt="Post" />
                </div>
            </div>
            <div className={styles.postDetailsCon}>
                <h1>{post?.imageName || "Untitled"}</h1>
                <p>{post?.description || "No description available."}</p>
                <h3>Color Details</h3>
                <div className={styles.colorblock}>
                    <p>RED: {post?.imageColors[0].color.red || "no"}</p>
                    <p>Blue: {post?.imageColors[0].color.blue || "no"}</p>
                    <p>Green: {post?.imageColors[0].color.green || "no"}</p>
                </div>
                <div className={styles.colorblock}>
                    <p>RED: {post?.imageColors[1].color.red || "no"}</p>
                    <p>Blue: {post?.imageColors[1].color.blue || "no"}</p>
                    <p>Green: {post?.imageColors[1].color.green || "no"}</p>
                </div>
                <div className={styles.colorblock}>
                    <p>RED: {post?.imageColors[2].color.red || "no"}</p>
                    <p>Blue: {post?.imageColors[2].color.blue || "no"}</p>
                    <p>Green: {post?.imageColors[2].color.green || "no"}</p>
                </div>
                <div className={styles.colorblock}>
                    <p>RED: {post?.imageColors[3].color.red || "no"}</p>
                    <p>Blue: {post?.imageColors[3].color.blue || "no"}</p>
                    <p>Green: {post?.imageColors[3].color.green || "no"}</p>
                </div>
                <div className={styles.colorblock}>
                    <p>RED: {post?.imageColors[4].color.red || "no"}</p>
                    <p>Blue: {post?.imageColors[4].color.blue || "no"}</p>
                    <p>Green: {post?.imageColors[4].color.green || "no"}</p>
                </div>
                <div className={styles.PostDetailLabelCon}>
                    <h3>Labels</h3>
                    <p>{post?.imageLabels[0].description || "no label"}</p>
                    <p>{post?.imageLabels[1].description || "no label"}</p>
                    <p>{post?.imageLabels[2].description || "no label"}</p>
                    <p>{post?.imageLabels[3].description || "no label"}</p>
                    <p>{post?.imageLabels[4].description || "no label"}</p>
                    <p>{post?.imageLabels[5].description || "no label"}</p>
                    <p>{post?.imageLabels[6].description || "no label"}</p>
                    <p>{post?.imageLabels[7].description || "no label"}</p>
                    <p>{post?.imageLabels[8].description || "no label"}</p>
                    <p>{post?.imageLabels[9].description || "no label"}</p>
                </div>

            </div>
        </div>
    )
}
export default PostDetailPage