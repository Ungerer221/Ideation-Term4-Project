import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../config/firebase"
import { getAuth } from "firebase/auth";

// * Get All users //////////////////////////////
export const getAllUsersList = async () => {
    // var allUsers = [] // empty array

    // var q = query(collection(db, "users"));

    // const querySnapShot = await getDoc(q);
    // querySnapShot.forEach((doc) => {
    //     allUsers.push({ ...doc.data(), id: doc.id })
    //     // console.log(doc.id, " => ", doc.data());
    // })

    // // console.log(allUsers)
    // return allUsers

    var allUsers = [] // empty array
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allUsers.push({ ...doc.data(), id: doc.id })
        console.log(doc.id, " => ", doc.data());
    });
    return allUsers
}

// * : get single user data
export const getUserItem = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    // const currentUserUid = getloggedinUser()
    // console.log(currentUserUid)
    try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc((docRef), user);

        if (docSnap.exists()) {
            // ? this loops infinitly 
            console.log("Document data:", docSnap.data());
            // TODO: include the id in the docsnap
            // var theUserData = {...doc.data(), id: doc.id}
            var theUserData = { ...docSnap.data(), id: docSnap.id } // to get the id frfom the docsnap
            // usersData.push(theUserData)
            // return docSnap.data() 
            return theUserData; // Directly return the document data
        } else {
            console.log("No such document!");
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error getting UserItem: ", error);
        throw error; // Optionally rethrow the error to handle it elsewhere
    }
};