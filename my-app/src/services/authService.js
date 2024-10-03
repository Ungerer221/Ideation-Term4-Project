import { auth } from '../config/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// * Login Function
export const handleLogin = (email, password) => {
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

// * Signup function
export const handleSignup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User Auth Created Successfully - " + user.email)
            console.log("The User UID: " + user.uid)
            // TODO: Call create new user and also send the user.UID
            // createNewUser(userInfo,user.uid)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
}

// export const createNewUser = async (user,id) => {
//     try {
//         const docRef = await setDoc(doc(db, "users", id),user) 
//         // console.log("user Doc created with ID: ", docRef.id);
//         return true
//     } catch (e) {
//         console.error("Error adding user: ", e);
//         return false
//     }
// }