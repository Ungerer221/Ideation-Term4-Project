// import React, { useState } from "react";
// import axios from 'axios';

// // 1st - setting up the usesStates
// // const [imageData, setImageData] = useState('');
// // const [result, setResult] = useState([]);
// // const [imageColors, setImageColors] = useState([]);
// // const [labels, setLabels] = useState([]);


// const handleImageAnalysis = async (image) => {
//     const file = image.target.files[0];
//     const reader = new FileReader(); //? 


//     reader.onloadend = async () => {
//         setImageData(reader.result);
//         // request body START
//         const requestBody = {
//             "requests": [
//                 {
//                     "image": {
//                         "content": reader.result.split(',')[1],
//                     },
//                     "features": [
//                         {
//                             "type": 'LABEL_DETECTION',

//                             "maxResults": 10,
//                         },
//                         {
//                             "type": "IMAGE_PROPERTIES",
//                             "maxResults": 5,
//                         }
//                     ],
//                 },
//             ],
//         };
//         // requestBody END

//         try {
//             // Axios Start
//             const response = await axios.post(
//                 ``,
//                 requestBody,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             // axios end

//             setResult(response.data)

//             const iLabels = response.data.responses[0].labelAnnotations || [];
//             setLabels(iLabels);

//             const dominantColors = response.data.responses[0].imagePropertiesAnnotation?.dominantColors?.colors || [];
//             setImageColors(dominantColors);

//         } catch (error) {
//             console.error('Error making request to Vision API', error);
//             reject(error);
//         }
//     };
//     // Convert image to Base64
//     reader.readAsDataURL(file);
// };
// console.log(result)

// export default handleImageAnalysis