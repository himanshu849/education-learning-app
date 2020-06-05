import React, { useRef, useContext, useEffect } from "react";
import film from "../../assets/videos/trailer_hd.mp4";
import { RowContainer, VideoPlayerContainer } from "./CustomVideo.styles";
import poster from "../../assets/lake.jpg";
import { VideoContext } from "../../Contexts/Video/Video.context";


const CustomVideoPlayer = ({ props }) => {

    const videoRef = useRef(null);

    const { slectedValue } = useContext(VideoContext);
    

    useEffect(() => {
        const { current } = videoRef;
 
        if(slectedValue) {
            current.currentTime = slectedValue.time;
            current.play();
        }
       
        return () => {
        }
    },)


    return (
        <RowContainer>
            <VideoPlayerContainer>
                <video width="600" 
                controls 
                disablePictureInPicture 
                src={film}
                ref={videoRef} 
                poster={poster} 
                controlsList="nodownload" />
                
            </VideoPlayerContainer>
        </RowContainer>
    );
};

export default CustomVideoPlayer;
