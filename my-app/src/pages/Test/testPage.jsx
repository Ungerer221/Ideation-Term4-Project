import React, { useCallback, useEffect, useState } from "react";
import { getAllUsersList } from "../../services/userService";

function TestPage() {

    const [users, setUsers] = useState([])



    const handleGettingUserData = async () => {
        try {
            const allUserData = await getAllUsersList();
            setUsers(allUserData)
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        // React.useCallback(() => {
        //     handleGettingUserData()
        //     return () => { }
        // })
        handleGettingUserData()
    }, [])

    console.log(users.length);
    console.table(users)

    return (
        <div>
            <h1>testing database </h1>
            <p>hey</p>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>User : {`${user.username} : ${user.email} : ${user.password}`}</li> // Adjust based on the structure of your user data
                    ))}
                </ul>
            </div>
            <h1>current user</h1>
        </div>
    )
}
export default TestPage