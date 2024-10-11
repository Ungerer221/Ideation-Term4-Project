import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// * Google cloud ///////////////////////////////////////////////////
const DetectObject = () => {
  const [imgeUri, setImageUri] = useState(null);
  const [labels, setLabels] = useState([]); //will store the analised object labels 

  // lets you choose your images 
  const pickImage = async () => {
    try {
      // TODO : image picker code here
    }catch(error){
      
    }
  }

}

// * Defualt ////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
