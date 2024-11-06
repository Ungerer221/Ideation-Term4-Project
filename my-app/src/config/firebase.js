import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Your web app's Firebase configuration
const firebaseConfig = {
    //* paste...

};
// const firebaseConfig = process.env.firebaseConfig;


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// database
export const db = getFirestore(app);

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, ""); //*past here

export { storage };
// export{app};