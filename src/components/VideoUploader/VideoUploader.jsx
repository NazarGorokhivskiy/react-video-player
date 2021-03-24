import React from 'react';
import '../VideoPlayer/VideoPlayer.css';
import {readFileAsURL} from "../../util/readFileAsURL";

const VideoUploader = ({onUpload}) => {
    const readVideo = async event => {
        if (event.target.files && event.target.files[0]) {
            const videoUrl = await readFileAsURL(event.target.files[0]);

            onUpload(videoUrl)
        }
    }

    return (
        <div>
            <p>Choose video to upload</p>
            <input data-testid="video-input" type="file" accept="video/*" onChange={readVideo}/>
        </div>
    );
};

export default VideoUploader;
