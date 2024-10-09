import { auth, db } from '../config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    getRedirectResult,
    getAuth,
    signOut
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";

// * Login Function /////////////////////////////////////////////////
export const handleLogin = (email, password) => {
    // * email-&-password //
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("logged In User - " + user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

// * Signup function ////////////////////////////////////////////////
// const auth = getAuth();
export const handleSignup = async (email, password, userInfo) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("The User UID: " + user.uid)
            console.log("User Auth Created Successfully - " + user.email)
            createNewUser(userInfo,user.uid)

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
};

// * Create new user ////////////////////////////////////////////////
export const createNewUser = async (user, id) => {
    try {
        const docRef = await setDoc(doc(db, "users", id), user)
        // console.log("user Doc created with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding user: ", e);
        return false
    }
}

// * Get Currently Logged in user ///////////////////////////////////
export const getLoggedinUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        const uid = user.uid
        return uid
    } else {
        console.log("no found user");
    }
}

// * Logout Current User ////////////////////////////////////////////
export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log('User signed out successfully');
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
    console.log("Executed Function")
}