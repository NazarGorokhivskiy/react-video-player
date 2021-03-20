import React, {useState} from "react";
import './App.css';
import VideoPlayer from "./components/VideoPlayer";
import VideoUploader from "./components/VideoUploader";

function App() {
    const [video, setVideo] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <VideoUploader onUpload={setVideo}/>
                <VideoPlayer video={video}/>
            </header>
        </div>
    );
}

export default App;
