import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import RecipeCard from '../RecipeCard/RecipeCard';
import useStyles from './styles';



const infoCards = [
    { color: '#6E5E97', title: 'Video Recipes', text: 'Give me video recipes' },
    { color: '#F34213', title: 'Recipes by meal-type', info: 'main course, side dish, dessert, appetizer, salad, breakfast, bread', text: 'Give me bread video recipes' },
    { color: '#51A3A3', title: 'Recipes by diet', info: 'Gluten Free, Ketogenic, Vegetarian, Vegan, Ovo-Vegetarian...', text: 'show me Gluten Free video recipes' },
    { color: '#F4562A', title: 'Recipes by cuisine', info: 'African, British, Chinese, Japanese, Indian, Korean, Mexican..', text: 'show me Chinese recipes' },
  ];

const RecipesCards = ({ recipes }) => {
    const classes = useStyles();

    if(!recipes.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {
                                    infoCard.info ? 
                                    (<Typography variant="h6">
                                        <strong>
                                            {infoCard.title.split(' ')[2]}:
                                        </strong>
                                        <br/>
                                        {infoCard.info}
                                    </Typography>) : null
                                }

                            <Typography variant="h6">Try saying: <br/> <i>{infoCard.text}</i> </Typography>
                            </div>

                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return (

        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {recipes.map((recipe, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <RecipeCard recipe={recipe} i={i} />
                    </Grid>
                ))}
            </Grid>
            
        </Grow>
    )
}

export default RecipesCards;

// import React from 'react';
// import RecipeCard from '../RecipeCard/RecipeCard';

// const RecipesCards = ({ recipes }) => {
//     return (
//         <div>
//             {recipes.map((recipe, i) => (
//                 <RecipeCard/>
//             ))}
//         </div>
//     )
// }

// export default RecipesCards;

