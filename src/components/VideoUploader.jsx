import React from 'react';
import './VideoPlayer.css';

const VideoUploader = ({onUpload}) => {
    const readVideo = event => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onUpload(e.target.result);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div>
            <p>Choose video to upload</p>
            <input type="file" accept="video/*" onChange={readVideo}/>
        </div>
    );
};

export default VideoUploader;
