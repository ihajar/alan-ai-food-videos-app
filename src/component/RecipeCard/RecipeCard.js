import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const RecipeCard = ({ recipe: { title, rating, thumbnail, views, youTubeId, shortTitle }, i }) => {
    const classes = useStyles();
    let video_url = `https://www.youtube.com/watch?v=${youTubeId}`
    return (
        <Card className={classes.card}>
            <CardActionArea href={video_url} tagrte="_blank" >
                <CardMedia className={classes.media} image={thumbnail} />
                <Typography className={classes.title} gutterBottom variant="h5">{shortTitle}</Typography>
                {/* <Typography gutterBottom variant="h5">{title}</Typography> */}

                {/* <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{views}views</Typography>
                </CardContent> */}
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <a href={video_url}  tagrte="_blank">Youtube video</a>
                </Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default RecipeCard;





