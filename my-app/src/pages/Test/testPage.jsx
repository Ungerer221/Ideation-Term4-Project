import React, { useEffect, useState } from "react";
import { getAllUsersList } from "../../services/userService";

function TestPage() {

    const [users, setUsers] = useState([])

    const handleGettingUserData = async () => {
        var allUserData = await getAllUsersList()
        setUsers(allUserData)
    }
    console.log(users.length);
    console.table(users)

    return (
        <div>
            <h1>testing database </h1>
            <p>hey</p>
            <div>

            </div>
        </div>
    )
}
export default TestPage