import React from 'react';
import { makeStyles, Typography, AppBar, Toolbar,  IconButton } from '@material-ui/core';
import {  CameraAltOutlined } from '@material-ui/icons';

const useStyle = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1
        },
        appbar: {
            alignItems: 'center',
            top: 'auto',
            bottom: 0
        }
    }
))

const FooterComponent = () => {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary" className={classes.appbar}>
                <Toolbar >
                    <Typography>
                        Please upload your video here  .
                    </Typography>
                    <IconButton color='inherit'>
                        <CameraAltOutlined />
                    </IconButton>


                </Toolbar>
            </AppBar>

        </div>
    )
}

export default FooterComponent;