import { getAuth } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

function UserGenIdeas({ documents }) {
    const [userIdeas, setUserIdeas] = useState([]);
    const auth = getAuth();

    // fetching current user ideas 
    useEffect(() => {
        const fetchIdeas = async () => {
            const user = auth.currentUser;
            if (!user) {
                console.log("no logged in user");
                return;
            }

            try {
                const userIdeasCollectionRef = collection(db, "users", user.uid, "ideas")
                const querySnapShot = await getDocs(userIdeasCollectionRef);

                const ideasData = querySnapShot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUserIdeas(ideasData);
            } catch (error) {
                console.log("error fetching ideas", error)
            }
        }
        fetchIdeas()
    }, [auth.currentUser]);

    // * parsing the data /////////////////////////////////////////////////////
    // const parseContent = (content) => {
    //     const sections = content.split(/\*\*(.+?)\*\*/).slice(1);
    //     const parsed = [];

    //     for (let i = 0; i < sections.length; i += 2) {
    //         parsed.push({
    //             label: sections[i],
    //             content: sections[i + 1] ? sections[i + 1].trim() : "",
    //         });
    //     }
    //     return parsed
    // };

    // const parseIdeasData = (content) => {
    //     // Split content by each context section
    //     const sections = content.split(/###/).slice(1); // Removing initial non-context text

    //     return sections.map((section) => {
    //         const [title, ...ideas] = section.trim().split(/\d+\.\s/); // Splits by numbered ideas

    //         return {
    //             title: title.trim(),
    //             ideas: ideas.map(idea => idea.trim()).filter(idea => idea),
    //         };
    //     });
    // };

    // const parsedData = parseIdeasData(content);
    // const parsedContent = parseContent(userIdeas);




    return (
        <div >
            {/* 
            {documents.map((doc, docIndex) => (
                <div key={docIndex}>
                    <h2>Document {docIndex + 1}</h2>
                    {parseIdeasData(doc.content).map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.ideas.map((idea, ideaIndex) => (
                                    <li key={ideaIndex}>{idea}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))} */}
            {userIdeas.length === 0 ? (
                <p>No ideas found.</p>
            ) : (
                <ul>
                    {userIdeas.map(idea => (
                        <li key={idea.id}>
                            <h3>{idea.title}</h3>
                            <p>{idea.content}</p>
                        </li>
                    ))}
                </ul>
            )}

            
        </div>
    )
}
export default UserGenIdeas