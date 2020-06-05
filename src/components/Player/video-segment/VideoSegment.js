
import React, {useContext, useState} from 'react';
import { makeStyles, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import { VideoContext } from '../../../Contexts/Video/Video.context';

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1
        }
    }
))



const VideoSigmentListComponent = () => {

    const classes = useStyles()
    const {sergarySteps, selectSergarySteps} = useContext(VideoContext);
    const [selectedIndex, setSelectedIndex] = useState(null);   

    const handleListItemClick = (value, index) => {
        setSelectedIndex(index);
        selectSergarySteps({value, index})
    };

    return (
        <div className={classes.root}>
           <Typography variant="h6">Surgery Steps</Typography>

            <List>
                {sergarySteps.map((res, index) => {
                    return (

                        <React.Fragment key={index}>
                            <ListItem button
                                
                                selected={selectedIndex ===  index}
                                onClick={(event) => handleListItemClick(res.time, index)}
                            >
                            <ListItemText>{index + 1}. {res.text} </ListItemText>
                            </ListItem>
                            <Divider />
                        </React.Fragment>

                    )
                })}

            </List>
        </div>
    );
}

export default VideoSigmentListComponent;