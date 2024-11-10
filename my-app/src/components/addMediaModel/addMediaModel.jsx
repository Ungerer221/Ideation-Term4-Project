import React, { useRef, useState } from "react";
import styles from "./addMediaModalStyle.module.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import axios from 'axios';

// MUI
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css, color } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import TextField from '@mui/material/TextField';

// Icons
import CommunityIconBubble from '../../assets/icons/bubble-chat-stroke-rounded.svg';
import PlusDottedCircle from '../../assets/icons/add-circle-half-dot-stroke-rounded.svg';
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { newPost } from "../../services/postService";
import handleImageAnalysis from "../../servicesAi/VisionAiService";
import Inputfield from "../InputField/inputField";

const AddMediaModel = () => {

    // * Model code ///////////////////////////////////////////////////////////////////////////////
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Backdrop = React.forwardRef((props, ref) => {
        const { open, className, ...other } = props;
        return (
            <div
                className={clsx({ 'base-Backdrop-open': open }, className)}
                ref={ref}
                {...other}
            />
        );
    });

    Backdrop.propTypes = {
        className: PropTypes.string.isRequired,
        open: PropTypes.bool,
    };

    const blue = {
        200: '#99CCFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0066CC',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

    const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

    const ModalContent = styled('div')(
        ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 32px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
    );
    // ! end of modal code //////////////////////////////////

    // * Actual Page code /////////////////////////////////////////////////////////////////////////
    const [file, setFile] = useState(null);
    const [imageName, setImageName] = useState(''); // State for image name
    const [imageDescription, setImageDescription] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState("");
    const fileInputRef = useRef(null);
    const auth = getAuth();

    const [testContent, SetTestContent] = useState();
    const [inputvalue, setInputValue] = useState('');

    // usestates for vision ai
    const [imageData, setImageData] = useState('');
    const [result, setResult] = useState([]);
    const [labels, setLabels] = useState([]);
    const [imageColors, setImageColors] = useState([]);

    // * API KEy///////////////////////////////////////////////////////////////////////////////////
    const apiKey = ""

    const handleFileChange = async (e) => {
        setFile(e.target.files[0]); // this is fetching the image we have selected and setting it to the usestate
        console.log("File selected:", e.target.files[0]);

        const file = e.target.files[0]
        const reader = new FileReader();

        reader.onloadend = async () => {
            setImageData(reader.result); // updates the imageData state with the Base64-encoded image.
            // prepare the request body
            const requestBody = {
                "requests": [
                    {
                        "image": {
                            "content": reader.result.split(',')[1],
                        },
                        "features": [
                            {
                                "type": 'LABEL_DETECTION',

                                "maxResults": 10,
                            },
                            {
                                "type": "IMAGE_PROPERTIES",
                                "maxResults": 5,
                            }
                        ],
                    },
                ],
            };

            try {
                const response = await axios.post(
                    `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
                    requestBody,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                setResult(response.data)

                const iLabels = response.data.responses[0].labelAnnotations || [];
                setLabels(iLabels);

                const dominantColors = response.data.responses[0].imagePropertiesAnnotation?.dominantColors?.colors || [];
                setImageColors(dominantColors);

            } catch (error) {
                console.error('Error making request to Vision API', error);
            }
        };

        reader.readAsDataURL(file);
        console.log('file change executed')
    }
    console.log(result)

    const handleNameChange = (value) => {
        // setImageName(e.target.value);
        // SetTestContent(e.target.value)
        setInputValue(value)
        // console.log(imageName)
        console.log(inputvalue);
    }



    // this could go in storace service file
    const handleUpload = () => {
        if (!file) return;

        // autherising the user for upload for the currently logged user
        const user = auth.currentUser;
        if (!user) {
            alert("you need to log in to upload an image");
            return;
        }

        // Create a storage reference with a folder (post) and unique filename
        const storageRef = ref(storage, `post/${file.name}`);
        // upload task
        const uploadTask = uploadBytesResumable(storageRef, file);

        // monitoring the upload progress
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.log("upload failed: ", error);
            }, async () => {
                // get the url
                const url = await getDownloadURL(uploadTask.snapshot.ref);

                // setDownloadURL(url)
                // console.log("file available at", url);

                // saveing the image url into the user posts collection
                try {
                    // can move to postservice.js
                    const userPostsCollectionRef = collection(db, "users", user.uid, "posts");
                    // create new doc
                    const newPostRef = doc(userPostsCollectionRef); // auto id gen

                    await setDoc(newPostRef, {
                        imageUrl: url,
                        imageName: imageName,
                        imageLabels: labels,
                        imageColors: imageColors,
                        timestamp: new Date(),
                    });
                    console.log("Post successfully add to firebase")
                    handleClose();
                    resetForm();
                } catch (error) {
                    console.error("Error adding post to Firestore:", error);
                }
            }
        );
        console.log('handleupload executed')
    };

    const resetForm = () => {
        setImageName('');
        setFile(null);
        setUploadProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input
        }
    };

    console.log(testContent)
    return (
        <div>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 400 }}>
                    <h2 id="unstyled-modal-title" className="modal-title">
                        Post
                    </h2>
                    <p id="unstyled-modal-description" className="modal-description">
                        upload your art to the community
                    </p>
                    <div>
                        <TextField
                            label="Image Name"
                            value={imageName}
                            onChange={(e) => setImageName(e.target.value)}
                            fullWidth
                            margin="normal"
                            multiline
                        />
                    </div>
                    <div>
                        <TextField
                            label="Description"
                            value={imageDescription}
                            onChange={(e) => setImageDescription(e.target.value)}
                            fullWidth
                            margin="normal"
                            multiline
                        />
                    </div>
                    <input type="file" onChange={handleFileChange} className={styles.addMediaModelFileButton} />
                    {/* //* Image preview /////////////////////////////////////////////// */}
                    {/* this is to display a preview of the image to show the user what image they have selected */}
                    {file && (
                        <div>
                            <h3>Selected Image:</h3>
                            <img
                                src={URL.createObjectURL(file)}
                                alt="Selected"
                                style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: '12px' }}
                            />
                        </div>
                    )}
                    {/* //* this shows the progress of the upload /////////////////////// */}
                    <div>
                        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
                    </div>

                    <button onClick={handleUpload} className={styles.uploadButton}>Post</button>
                </ModalContent>
            </Modal>

            <div className={styles.addPostButtonCon}>
                <button className={styles.addPostButton} onClick={handleOpen}>
                    <img src={PlusDottedCircle} alt="" />
                </button>
            </div>
        </div>
    )
}

export default AddMediaModel