import React, {useEffect, useRef} from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({video}) => {
    const videoSrc = useRef(null);

    useEffect(() => {
        if (video) {
            videoSrc.current.src = video;
        }
    }, [video])

    const playVideo = () => video && videoSrc.current.play();

    const pauseVideo = () => video && videoSrc.current.pause();

    return (
        <div>
            {video ? <video data-testid="video-tag" ref={videoSrc} controls/> :
                <p className="video-placeholder">Your video appears here...</p>
            }
            <br/>
            <button
                data-testid="play-button"
                className="video-button video-button-play"
                type="button"
                onClick={playVideo}
            >Play
            </button>
            <button
                data-testid="pause-button"
                className="video-button video-button-pause"
                type="button"
                onClick={pauseVideo}
            >Pause
            </button>
        </div>
    );
};

export default VideoPlayer;
