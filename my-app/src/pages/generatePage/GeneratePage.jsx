import React, { useState } from "react";
import styles from './GeneratePageStyle.module.scss'

// icons
import MenuIcon from '../../assets/menuIcon.svg'
import ToolIcon from '../../assets/icons/wrench-01-stroke-rounded.svg'

// assets
import SmallHazzardArt from '../../assets/hazzardart/smallhazzardart.svg'
import LargeHazzArt from '../../assets/hazzardart/largehazzardart.svg'
import PowerButton from '../../assets/GenPage/power.svg'
import GenRing01 from '../../assets/GenPage/Ellipse01.svg'
import GenRing02 from '../../assets/GenPage/Ellipse02.svg'
import GenRing03 from '../../assets/GenPage/Ellipse03.svg'
import GenRing04 from '../../assets/GenPage/Ellipse04.svg'
import GenRing05 from '../../assets/GenPage/Ellipse05.svg'
import GenRing06 from '../../assets/GenPage/Ellipse06.svg'

import OpenAiResponse from "../../components/IdeaGenAi/ideaGenAi";

import callAzureOpenAi from "../../servicesAi/APICall";
import { getLoggedinUser } from "../../services/authService";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/firebase";


// TODO : when the tag is selected then change style and if clicked again change back to prev and remove value from string constructor 
// could do this but having it construct an array which is then converted to a string but the array will strore the selected values as the array will be mapped
// TODO : div that shows the key words that have been selected


function GeneratePage() {

    // const [prompt, setPrompt] = useState("");
    // const [response, setResponse] = useState("");
    const [messageContent, setMessageContent] = useState(''); // changed to empty string to prevent null error 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [selectedTags, setSelectedTags] = useState([]); // setting empty array for selected tags to be stored in an array
    const [savedNotice, setSavedNotice] = useState('');


    const handleInputChange = (question) => {
        // setPrompt(question.target.value);
    }

    const fetchData = async () => {
        console.log('Prompt before calling API:', prompt);
        // setLoading(true);
        // setError(null)
        try {
            const content = await callAzureOpenAi(prompt);
            setMessageContent(content);

            console.log("frontend response", content);
        } catch (error) {
            setError(error.message);
        }
    }

    const [combinedPromptString, setCombinedPromptString] = useState('can you give me an art idea based on these keywords: ');

    // the tag value string function - setting the prompt to the constructed string
    const handleTagClick = (value) => {
        setCombinedPromptString(prevString => prevString + value);
        setPrompt(prevString => prevString + value);
    }

    // the click that will store the value in the array 
    // TODO then we must that that value an input it back into the string Prompt compiler
    const handleTagStoreClick = (tag) => {
        setSelectedTags(prevTags => [...prevTags, tag]); // add tag to array
    }

    // reseting the prompt string function
    const handleStringReset = () => {
        // setCombinedPromptString('can you give me an art idea based on these keywords: ');
        setPrompt('');
    }

    console.log(combinedPromptString)

    // * Saving gen idea //////////////////////////////////////////////////////
    const handleSaveGenIdea = async () => {
        try {
            const currentUserID = await getLoggedinUser();
            console.log(currentUserID)

            // ref subcollection 
            const userDocRef = doc(db, 'users', currentUserID);
            const messagesCollectionRef = collection(userDocRef, 'ideas');

            // adding the content to the ideas subcollection 
            await addDoc(messagesCollectionRef, {
                content: messageContent, // from usestate
                timestamp: new Date(), // to ad a time stamp
            });
            console.log('idea saved')
            setSavedNotice('Saved! ;)')
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    // * Parsing the content //////////////////////////////////////////////////
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
    // const parsedContent = parseContent(messageContent);

    return (
        <div className={styles.generatePageMainContainer}>
            {/* //* TITLE CONTAINER /////////////////////////////////////////// */}
            <div className={styles.titleContainer}>
                <h1>Generate</h1>
                <div>
                    {/* <img src={MenuIcon} alt="icon" /> */}
                </div>
            </div>
            {/* //* Showing the selected tages  */}
            {prompt && (
                <div className={styles.selectedPromptDisplayCon}>
                    <h2>Key words you've selected</h2>
                    {/* <p>prompt</p> */}
                    <p>{prompt}</p>
                    {/* <p>tag</p> */}
                    {selectedTags.map((tag, index) => (
                        <div key={index} className={styles.selectedTag}>
                            {tag}
                        </div>
                    ))}
                    <button onClick={handleStringReset} className={styles.clearselectedPropmtBTN}>clear</button>
                </div>
            )}
            {/* //* GENERATION BUTTON ///////////////////////////////////////// */}
            <div className={styles.generationButtonSection}>

                <button onClick={fetchData} className={styles.powerButtonCon}>
                    <img src={PowerButton} alt="" />
                </button>

                <div className={styles.genRingCon01}>
                    <img src={GenRing01} alt="" />
                </div>
                <div className={styles.genRingCon02}>
                    <img src={GenRing02} alt="" />
                </div>
                <div className={styles.genRingCon03}>
                    <img src={GenRing03} alt="" />
                </div>
                <div className={styles.genRingCon04}>
                    <img src={GenRing04} alt="" />
                </div>
                <div className={styles.genRingCon05}>
                    <img src={GenRing05} alt="" />
                </div>
                <div className={styles.genRingCon06}>
                    <img src={GenRing06} alt="" />
                </div>

            </div>
            {/* //* filter and selector panel ///////////////////////////////// */}
            <div className={styles.filterSelectorPanelCon}>
                <div className={styles.filterSelectorPanelTitelCon}>
                    <h1>tool box</h1>
                    <img src={ToolIcon} alt="" />
                </div>
                <div>
                    <p style={{ margin: "0", marginBottom:'10px', lineHeight:'0px', fontSize:'14px', opacity:'.7' }}>Select your desired keywords</p>
                </div>
                {/* //* categories // */}
                <div className={styles.sectionContainer}>
                    <h3>categories</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.tagContainer}>
                        <div className={styles.tag} onClick={() => handleTagClick('architexture, ')}>architexture</div>
                        <div className={styles.tag} onClick={() => handleTagClick('car, ')}>Cars</div>
                        <div className={styles.tag} onClick={() => handleTagClick('character, ')}>character</div>
                        <div className={styles.tag} onClick={() => handleTagClick('plant, ')}>plants</div>
                        <div className={styles.tag} onClick={() => handleTagClick('animal, ')}>animal</div>
                        <div className={styles.tag} onClick={() => handleTagClick('enviroment, ')}>enviroments</div>
                        <div className={styles.tag} onClick={() => handleTagClick('fantasy, ')}>fantasy</div>
                        <div className={styles.tag} onClick={() => handleTagClick('insect, ')}>insects</div>
                        <div className={styles.tag} onClick={() => handleTagClick('technology, ')}>technology</div>
                        <div className={styles.tag} onClick={() => handleTagClick('weapon, ')}>weapons</div>
                        <div className={styles.tag} onClick={() => handleTagClick('devices, ')}>devices</div>
                        <div className={styles.tag} onClick={() => handleTagClick('book, ')}>book</div>
                        <div className={styles.tag} onClick={() => handleTagClick('bottle, ')}>bottle</div>
                        <div className={styles.tag} onClick={() => handleTagClick('armor, ')}>armor</div>

                    </div>
                </div>
                {/* //* monthly events // */}
                <div className={styles.sectionContainer}>
                    <h3>monthly events</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.tagContainer}>
                        <div className={styles.tag}>mer-may</div>
                        <div className={styles.tag}>inktober</div>
                        <div className={styles.tag}>silly september</div>
                        <div className={styles.tag}>jewlry jully</div>
                    </div>
                </div>
                {/* //* themes // */}
                <div className={styles.sectionContainer}>
                    <h3>themes</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.tagContainer}>
                        <div className={styles.tag} onClick={() => handleTagClick('dark, ')}>dark</div>
                        <div className={styles.tag} onClick={() => handleTagClick('dangerous, ')}>dangerous</div>
                        <div className={styles.tag} onClick={() => handleTagClick('slime, ')}>slime</div>
                        <div className={styles.tag} onClick={() => handleTagClick('freindly, ')}>freindly</div>
                        <div className={styles.tag} onClick={() => handleTagClick('fun, ')}>fun</div>
                        <div className={styles.tag} onClick={() => handleTagClick('emotianal')}>emotianal</div>
                        <div className={styles.tag} onClick={() => handleTagClick('rich')}>rich</div>
                    </div>
                </div>
            </div>
            {/* //* textoutput panel ////////////////////////////////////////// */}
            <div>
                {/* <textarea
                    name=""
                    // onChange={(e) => {
                    //     setPrompt(e.target.value)
                    // }}
                    placeholder="enter prompt here..."
                    value={prompt}
                    onChange={handleInputChange}
                ></textarea> */}
            </div>
            <div className={styles.aiOutputPanel}>
                <div>
                    <div>
                        {messageContent &&
                            <div className={styles.aiOutputPanelResponseCon}>
                                <h1>Your Generated Idea</h1>
                                <p>{messageContent}</p>
                                {/* <input type="text" placeholder="reply here"/> */}
                                <div style={{ opacity: ".7" }}>
                                    {savedNotice}
                                </div>
                                <button onClick={handleSaveGenIdea} className={styles.saveResponseButton}>save</button>
                            </div>
                        }

                        {/* {parsedContent.map((section, index) => (
                            <div key={index} style={{ marginBottom: '1em' }} className={styles.aiOutputPanelResponseCon}>
                                <h3>{section.label}</h3>
                                <p>{section.content}</p>
                                <button onClick={handleSaveGenIdea}>save</button>
                            </div>
                        ))} */}
                    </div>
                    {/* <p name="answer" id="aiAnswer" placeholder="response here" className={styles.textarea}>Response here</p>
                    <p>{response}</p> */}
                </div>
            </div>
        </div>
    )
}
export default GeneratePage