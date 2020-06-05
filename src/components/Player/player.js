import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import VideoStandardComponent from './video-standard/VideoStandard';
import VideoSerganComponent from './video-sergan/VideoSerganComponent';
import VideoSigmentListComponent from './video-segment/VideoSegment';
import VideoContextProvider from '../../Contexts/Video/Video.context';

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
            padding: 16
        },

        typography: {
            marginTop: '3%'
        },

    }
))


const PlayerComponent = () => {

    const classes = useStyles();


    return (
        <VideoContextProvider>
            <div className={classes.root}>
                <Typography variant="h4" >Compare Cases</Typography>
                <Grid direction="row" container spacing={3} className={classes.typography}>
                    <Grid item xs={12}  sm={12} md={5}>
                        <VideoStandardComponent />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <VideoSerganComponent />
                    </Grid>
                    <Grid item xs={12}  sm={12} md={2}>
                        <VideoSigmentListComponent />
                    </Grid>
                </Grid>
            </div>
        </VideoContextProvider>

    );
}

export default PlayerComponent;