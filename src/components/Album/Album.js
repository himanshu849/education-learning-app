import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Card, CardMedia, CardContent,  Chip,  Typography, CardActions,  Grid,  CardActionArea, GridListTile } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        //justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    rootCard: {
        maxWidth: 345,
        margin: 16,
        paddingBottom: 10
    },
    media: {
        height: 200,
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',

    },

    gridListTile: {
        minHeight: 580
    },

    Chip: {
        float: "right",
        width: "70%",
        backgroundColor: grey[800],
        color: grey[200]

    },

    link: {
        textAlign: 'center'
    }

}));


const AlbumComponent = () => {
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6];


    return (
        <>
            <div className={classes.root}>
                <GridList className={classes.gridList}  xs={12} sm={6} md={3} cols={4}>
                    {cards.map((res) => {
                        return (
                            <GridListTile key={res} className={classes.gridListTile} sm={12}>
                                <Card className={classes.rootCard}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/lake.jpg')}

                                        />
                                        <CardContent>
                                            <Typography color="initial" variant="h6">
                                                Toric IOL used in Radial Keratotomay
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions >
                                        <Grid container>
                                            <Grid item md={6} >
                                                <Grid container>
                                                    <Grid item md={3} >
                                                        <AccountCircleIcon color="primary" />
                                                    </Grid>
                                                    <Grid item md={9}>
                                                        <Typography variant="subtitle2" >30-05-2020 </Typography>

                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                            <Grid item md={6} >
                                                <Chip className={classes.Chip} label="Himanshu Shekhar" />
                                            </Grid>
                                        </Grid>


                                    </CardActions>
                                    <CardContent >
                                        <Typography variant="subtitle2">

                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </Typography>
                                    </CardContent>
                                    <CardActionArea className={classes.link}>
                                       <Link to="/video-player">WATCH NOW</Link>
                                    </CardActionArea>
                                </Card>
                            </GridListTile>

                        )
                    })}

                </GridList>
            </div>


        </>
    );
}

export default AlbumComponent
