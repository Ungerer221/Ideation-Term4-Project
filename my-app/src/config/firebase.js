import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Your web app's Firebase configuration
const firebaseConfig = {
    // paste...
    apiKey: "AIzaSyDz-jnzz4tudbQRZhVf6ppSiq2soQn5WW0",
    authDomain: "ideation-project-a621f.firebaseapp.com",
    projectId: "ideation-project-a621f",
    storageBucket: "ideation-project-a621f.appspot.com",
    messagingSenderId: "575924669758",
    appId: "1:575924669758:web:9479b600d70eca2343306f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// database
export const db = getFirestore(app);

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://ideation-project-a621f.appspot.com/"); //past here

export { storage };
// export{app};