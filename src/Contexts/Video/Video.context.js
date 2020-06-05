
import React, { createContext, useState } from 'react';


const data = [
    { time: 2, text: "Anesthesia" },
    { time: 10, text: "Creating a sclerocorneal " },
    { time: 16.48, text: "Creating a paracentesis" },
    { time: 29, text: "Making incision" },
    { time: 45.49, text: "Capsulorhexis" },

];

export const VideoContext = createContext()


const VideoContextProvider = (props) => {


    const [sergarySteps, setSergerySteps] = useState(data)

    const [slectedValue, setslectedValue] = useState(null)

    const selectSergarySteps = ({ value, index }) => {

        setslectedValue({
            time: value,
            index: index
        })

    }

    const videoContext = {
        sergarySteps,
        selectSergarySteps,
        slectedValue
    }

    return (

        <VideoContext.Provider value={videoContext}>
            {props.children}
        </VideoContext.Provider>

    );
}

export default VideoContextProvider;