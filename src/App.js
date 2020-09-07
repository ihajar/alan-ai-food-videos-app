import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import RecipesCards from './component/RecipesCards/RecipesCards';
import './App.css';

const alanKey = 'ba5c1bb3c4934c8756c7e5312e35bbf72e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [ RecipeVideos, setRecipeVideos ] = useState([]);

    const [activeRecipe, setActiveRecipe] = useState(-1);


    

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, videos, number }) => {
                if(command === 'newRecipes') {
                    setRecipeVideos(videos);
                    setActiveRecipe(-1);
                } else if(command === 'highlight') {
                    setActiveRecipe((prevActiveCard) => prevActiveCard + 1);
                }
            }
        })
    }, [])

    return (
        <div className="app">
            <div className="logoContainer">
                <img src={require('./assets/alan-ai-food-app-logo.gif')} className="alanLogo" alt="alan logo"/>
            </div>
            {/* <h1>Alan AI Food Video Application</h1> */}
            <RecipesCards recipes={RecipeVideos} activeRecipe={activeRecipe} />
        </div>
    )
}

export default App;
