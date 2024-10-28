import React from "react";
import axios from 'axios';

// https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?pivots=programming-language-javascript&tabs=command-line%2Cjavascript%2Cpython-new

// const dotenv = require("dotenv");
// dotenv.config();

const { AzureOpenAI } = require("openai");

const apiKey = ''; // apikey
const endpoint = ''; // endpoint
const deploymentId = ``; // deployment
const apiVersion = "";
// require("dotenv/config");





// calling text-davinci-003

// * method 01 //////////////////////////////////////////////////////////////////
// const OpenAiResponse = async (prompt) => {
//     const azureApiURL = ``; // the api url variable
//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${openAiApiKey}`
//     };

//     const body = {
//         prompt: prompt,
//         max_tokens: 150
//     };

//     try {
//         const response = await axios.post(azureApiURL, body, { headers });
//         return response.data.choices[0].text;
//     } catch (error) {
//         if (error.response) {
//             // The request was made and the server responded with a status code not in the 2xx range
//             console.error('Error Response Data:', error.response.data);
//             console.error('Error Response Status:', error.response.status);
//         } else if (error.request) {
//             // The request was made, but no response was received
//             console.error('No response received:', error.request);
//         } else {
//             // Something happened in setting up the request
//             console.error('Error setting up request:', error.message);
//         }
//         return null;
//     }
// }

// test response 
const OpenAiResponse = async () => {
    const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deploymentId });
    const result = await client.chat.completions.create({
        messages: [
            { role: "system", content: "you are a helpfull assistant." },
            { role: "user", content: "Does Azure OpenAI support customer managed keys?" },
            { role: "assistant", content: "Yes, customer managed keys are supported by Azure OpenAI?" },
            { role: "user", content: "Do other Azure AI services support this too?" },
        ],
        model: "",
    });
    for (const choice of result.choices) {
        console.log(choice.message);
    }
}

export default OpenAiResponse;