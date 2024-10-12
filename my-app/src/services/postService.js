// import { collection, doc, getDocs } from "firebase/firestore";
// import { auth, db } from "../config/firebase"

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