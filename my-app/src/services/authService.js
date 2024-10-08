import { auth, db } from '../config/firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithRedirect, 
    signInWithPopup, 
    getRedirectResult 
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

    // * redirect //
    // signInWithRedirect(auth, new GoogleAuthProvider());
    // const userCred = await signInWithPopup(auth, new GoogleAuthProvider())
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         console.log("logged In User - " + user.email)
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorMessage)
    //     });
}

// * Signup function ////////////////////////////////////////////////
// const auth = getAuth();
export const handleSignup = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("The User UID: " + user.uid)
            console.log("User Auth Created Successfully - " + user.email)

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