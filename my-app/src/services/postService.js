// import { collection, doc, getDocs } from "firebase/firestore";
// import { auth, db } from "../config/firebase"

import { collection, doc, setDoc, Timestamp } from "firebase/firestore"
import { auth, db } from "../config/firebase"


export const newPost = async (url, imageName) => {
    const user = auth.currentUser;
        if (!user) {
            alert("you need to log in to upload an image");
            return;
        }
    try {
        const userPostCollectionRef = collection(db, "users", user.uid, "posts");

        // creating an new doc 
        const newPostRef = doc(userPostCollectionRef);
        await setDoc(newPostRef, {
            imageUrl: url,
            imageName: imageName,
            timestamp: new Date(),
        });

        console.log("Post successfully add to firebase")

    } catch (error) {
        console.error("Error adding post to Firestore:", error);
    }
}

// // fetching the current users posts
// const fetchPosts = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//         console.log("no logged in user");
//         return;
//     }

//     try {
//         const userPostsCollectionRef = collection(db, "users", user.uid, "posts");
//         const querySnapShot = await getDocs(userPostsCollectionRef);

//         const postsData = querySnapShot.docs.map((doc)=>({
//             id:doc.id,
//             ...doc.data(),
//         }));
//         setPosts(postsData);
//     }
// }