import React, {useRef} from "react";
import "./Video.css";


function Video(){
    const videoRef= useRef(null);

    const onvideoPress = () => {
        videoRef.current.play();
    }

    return (
    <div className="video">
        <video className="video_player"
        loop 
        onclick={onvideoPress}
        ref={videoRef}
        src="https://youtu.be/aVG7BgErurQ" alt="no" width="100%" height="100%"></video>
        </div>
    );
}

export default Video