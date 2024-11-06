import React, { useState } from "react";

const Inputfield = ({onInputChange}) => {
    // const [inputValue, setInputValue]=useState('')
    const handleInputChange = (e)=>{
        onInputChange(e.target.value)
    }

return(
    <div>
        <input 
        type="text" 
        // value={inputValue}
        onChange={handleInputChange}
        placeholder="value"
        />
    </div>
)
}
export default Inputfield