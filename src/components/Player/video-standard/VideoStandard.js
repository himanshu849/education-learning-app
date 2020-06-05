
import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import VideoPlayer from '../../Video/Video';
import CustomVideoPlayer from '../../CustomVideo/CustomVideo';
import film from '../../../assets/videos/gone.mp4'


const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
            padding: 16
        },

        typography: {
            marginTop: '3%'
        },

        iconCOlor: {
            color: grey[400],
        }

    }
))



const VideoStandardComponent = () => {

    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid container direction="row">
                <Grid>
                    <AccountCircle fontSize="large" className={classes.iconCOlor} />
                </Grid>
                <Grid>
                    <Typography variant="h6">My most dense catareact on october</Typography>
                    <Typography variant="subtitle2">01/06/2020 04:22 PM By me</Typography>
                </Grid>
            </Grid>
            <Grid>
                <CustomVideoPlayer />
                {/* <VideoPlayer src={film}/> */}
            </Grid>

        </Grid>
    );
}

export default VideoStandardComponent;