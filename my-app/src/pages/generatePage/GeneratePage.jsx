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



function GeneratePage() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        const result = await OpenAiResponse(prompt);
        setResponse(result);
    };

    function power() {
        alert("Power button Active")
    }

    return (
        <div className={styles.GeneratePageMainContainer}>
            {/* //* TITLE CONTAINER /////////////////////////////////////////// */}
            <div className={styles.titleContainer}>
                <h1>Generate</h1>
                <div>
                    {/* <img src={MenuIcon} alt="icon" /> */}
                </div>
            </div>
            {/* //* GENERATION BUTTON ///////////////////////////////////////// */}
            <div className={styles.generationButtonSection}>

                <button onClick={handleSubmit} className={styles.powerButtonCon}>
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
                {/* //* categories // */}
                <div className={styles.sectionContainer}>
                    <h3>categories</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.tagContainer}>
                        <div className={styles.tag}>architexture</div>
                        <div className={styles.tag}>Cars</div>
                        <div className={styles.tag}>character</div>
                        <div className={styles.tag}>plants life</div>
                        <div className={styles.tag}>animal life</div>
                        <div className={styles.tag}>enviroments</div>
                        <div className={styles.tag}>fantasy art</div>
                        <div className={styles.tag}>insects</div>
                        <div className={styles.tag}>technology</div>
                        <div className={styles.tag}>weapons</div>
                        <div className={styles.tag}>devices</div>
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
                        <div className={styles.tag}>dark</div>
                        <div className={styles.tag}>freindly</div>
                        <div className={styles.tag}>fun</div>
                        <div className={styles.tag}>emotianal</div>
                    </div>
                </div>
            </div>
            {/* //* textoutput panel ////////////////////////////////////////// */}
            <div>
                <textarea
                    name=""
                    value={prompt}
                    onChange={(e) => {
                        setPrompt(e.target.value)
                    }}
                    placeholder="enter prompt here..."
                    id=""
                ></textarea>
            </div>
            <div className={styles.aiOutputPanel}>
                <div>
                    <p name="answer" id="aiAnswer" placeholder="response here" className={styles.textarea}>Response here</p>
                    <p>{response}</p>
                </div>
            </div>
        </div>
    )
}
export default GeneratePage