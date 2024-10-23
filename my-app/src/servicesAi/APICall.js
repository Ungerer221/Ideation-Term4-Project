import React, { useState, useEffect } from 'react';

// https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cjavascript%2Cpython-new&pivots=programming-language-javascript

// break down of what i did 
// first got the api call for the ai to work with a hard coded prompt 
// then i got it to display the json data on the front end of the project 
// then i gave it a proper prompt again hardcodded and got a good response 
// then i needed to get th prompt value from an input 
// i then passed the prompt value from the input to the api call  
    // using consols to show the prompt before passed and then the prompt recieved becuase forst i got an undifined error
    // then after it worked i send and recived the prompt 
// then set the "text" value in the message of the api to = that prompt value 
// now it works with input and so on but its not a chat bot right now 

// a combination of chat gpt and documentation
// https://chatgpt.com/c/67120322-8390-800c-9493-1790e92a4e3b

// what also helped me piece this togeter was i demoed the chat bot on the service and it has an
// option to the code and changed it to json and pasted my question json in the bodty below 



const callAzureOpenAi = async (prompt) => {
    console.log('Prompt received in callAzureOpenAI:', prompt); // loging recieving the prompt

    const endpoint = process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
    const apiKey = ""; // TODO: dont upload this 
    // const apiKey = process.env.REACT_APP_AZURE_OPENAI_API_KEY;    

    // * calling the api with the fetch method
    try {
        // TODO: dont upload this Endpoint
        const response = await fetch(``, {//* paste
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": prompt
                            }
                        ]
                    }
                ],
                "temperature": 0.7,
                "top_p": 0.95,
                "max_tokens": 800
            }),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            console.error("Error details:", errorDetails);
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // extracting the JSON data
        const data = await response.json();
        console.log("Response from azure Openai", data);

        // const content = data.choices[0].message.content;
        // setMessageContent(content); // store message content in state

        return data.choices[0].message.content // it is passing the data
    } catch (error) {
        console.error("Error calling azure openai api: ", error);
    }
};

export default callAzureOpenAi