import { collection, getDoc, orderBy, query } from "firebase/firestore"
import { db } from "../config/firebase"

// * Get All users //////////////////////////////
export const getAllUsersList = async () => {
    let allUsers = [] // empty array

    let q = query(collection(db, "users"));

    const querySnapShot = await getDoc(q);
    querySnapShot.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
        // console.log(doc.id, " => ", doc.data());
    })

    // console.log(allUsers)
    return allUsers
}