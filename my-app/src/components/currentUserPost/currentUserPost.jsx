import React from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../../config/firebase";
import styles from './userPostStyle.module.scss';

const UserPosts = () => {
    const [posts, setPosts] = useState([]);
    const auth = getAuth();

    // fetching the current users posts
    useEffect(() => {
        const fetchPosts = async () => {
            const user = auth.currentUser;
            // if there is no user found
            if (!user) {
                console.log("no logged in user");
                return;
            }

            try {
                const userPostsCollectionRef = collection(db, "users", user.uid, "posts");
                const querySnapShot = await getDocs(userPostsCollectionRef);

                const postsData = querySnapShot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        }
        fetchPosts();
    }, [auth.currentUser]);
    return (
        <div>
            <h1>your posts</h1>
            {posts.length === 0 ? (
                // if there are no posts
                <p>No posts available</p>
            ) : (
                // if there are posts found
                <div className={styles.cardContainer}>
                    {posts.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <img
                                src={post.imageUrl}
                                alt="User Post"
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                            {/* <p>Posted on: {post.timestamp?.toDate().toLocaleString()}</p> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default UserPosts