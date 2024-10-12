import React, { useState } from "react";
import styles from "./addMediaModalStyle.module.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

// MUI
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';

// Icons
import CommunityIconBubble from '../../assets/icons/bubble-chat-stroke-rounded.svg';
import PlusDottedCircle from '../../assets/icons/add-circle-half-dot-stroke-rounded.svg';
import { getAuth } from "firebase/auth";

const AddMediaModel = () => {

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
    border-radius: 8px;
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

    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState("");
    const auth = getAuth();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // this is fetching the image we have selected and setting it to the usestate
        console.log("File selected:", e.target.files[0]);
    }

    // this could go in storace service file
    const handleUpload = () => {
        if (!file) return; //?

        // autherising the user for upload for the currently logged user
        const user = auth.currentUser;
        if(!user){
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
            }, () => {
                // when upload is completee, get the download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log("file available at", url);
                    setDownloadURL(url); // save the download URL to the state
                });
            }
        );
    };


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
                        <label htmlFor="fileName"></label>
                        <input name="fileName" type="text" placeholder="File Name" />
                    </div>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                    {/* this is to display a preview of the image to show the user what image they have selected */}
                    {file && (
                        <div>
                            <h3>Selected Image:</h3>
                            <img
                                src={URL.createObjectURL(file)}
                                alt="Selected"
                                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                            />
                        </div>
                    )}
                    {/* this shows the progress of the upload */}
                    <div>
                        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
                        {/* {downloadURL && (
                            <p>
                                File uploaded! Download URL:{" "}
                                <a href={downloadURL} target="_blank" rel="noopener noreferrer">
                                    {downloadURL}
                                </a>
                            </p>
                        )} */}
                    </div>
                    <button>clear</button>
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