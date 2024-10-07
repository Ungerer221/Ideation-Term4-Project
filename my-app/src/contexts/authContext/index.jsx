// import { initializeAuth, onAuthStateChanged } from "firebase/auth";
// import { useContext, useEffect, useState } from "react";
// import { auth } from "../../config/firebase";

// // youtube tutorial
// // https://www.youtube.com/watch?v=WpIDez53SK4

// export function useAuth() {
//     return useContext(AuthContext);
// }

// // * The apps auth context //////////////////////////////////////////
// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, initializeUser);
//         return unsubscribe;
//     }, [])

//     async function initializeUser(user) {
//         if (user) {
//             setCurrentUser({ ...user });
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     // * from auth provider we expose the value object - currentUser + userloggedIn + loading
//     const value = {
//         currentUser,
//         userLoggedIn,
//         loading
//     }

//     // * return auth contect provider
//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }