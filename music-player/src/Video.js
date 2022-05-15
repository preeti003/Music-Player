import React, {useRef} from "react";
import "./Video.css";
import IMAGE from ".//IMG.jpg";
import Song from ".//song.mp3"


class MyVideoComponent extends React.Component {
  render() {
    return (
     <img src={IMAGE} ></img> 
     <audio src={Song} autoplay ></audio>
    );
  }
}

export default MyVideoComponent
