import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

const RecipeCard = ({ recipe: { title, rating, thumbnail, views, youTubeId, shortTitle }, i, activeRecipe }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i === activeRecipe && elRefs[activeRecipe]) {
            scrollToRef(elRefs[activeRecipe]);
        }
    }, [i, activeRecipe, elRefs]);

    let video_url = `https://www.youtube.com/watch?v=${youTubeId}`
    
    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeRecipe === i ? classes.activeCard : null )}>
            <CardActionArea href={video_url} tagrte="_blank" >
                <CardMedia className={classes.media} image={thumbnail} />
                <Typography className={classes.title} gutterBottom variant="h5">{shortTitle}</Typography>
             
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <a href={video_url}  tagrte="_blank">Youtube video</a>
                </Button>
                {/* <Typography variant="h5" color="textSecondary">{i+1}</Typography> */}
            </CardActions>
        </Card>
    )
}

export default RecipeCard;





