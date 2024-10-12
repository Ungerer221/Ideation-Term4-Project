
// ? Links to resources ?

// * Quick Guide
// https://cloud.google.com/vision/docs/detect-labels-image-client-libraries#local-shell

// * Vision docs...............................................................
// https://cloud.google.com/vision/docs

// * image_annotator.async_batch_annotate_images.js............................
// https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_images.js

// * Google Cloud Node.js Client Libraries.....................................
// https://github.com/googleapis/google-cloud-node?tab=readme-ov-file

// * Google Cloud Vision API: Node.js Client...................................
// https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vision

// Imports the Vision library
// const { ImageAnnotatorClient } = require('@google-cloud/vision').v1;

//  export const visionAi = async () => {
//     const API_KEY = "AIzaSyDw849ZEKbT_Qjg2P_dPu7YAQKmQoK0elI" // past own api key
//     const GOOGLE_URL = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${AIzaSyDw849ZEKbT_Qjg2P_dPu7YAQKmQoK0elI};`
    
//     // Imports the Google Cloud client library
//     const vision = require('@google-cloud/vision');
    
//     // Creates a client
//     const client = new vision.ImageAnnotatorClient();
    
//     // Performs label detection on the image file
//     const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
//     const labels = result.labelAnnotations;
//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
// }
// quickstart();

async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart();