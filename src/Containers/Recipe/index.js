// TODO Create a connected component to render a fetched recipe
import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { RecipeWrapper } from './styles'

class Recipe extends Component {
    render() {
        const recipes = this.props.recipes
        
        // this conditional statement is so that the component would return null or the list of recipes based on the Redux state
        if (recipes) {
            const listOfRecipes = recipes.map(recipe => (
                <ListItem key={recipe.id} id="recipes">
                    <Link to={`/recipe/${recipe.id}`}>
                        <ListItemText primary={recipe.name} />
                    </Link>
                </ListItem>
            ))

            return (
            <RecipeWrapper>
                <List>
                    {listOfRecipes}
                </List>
             </RecipeWrapper>
            )
        }
        
        return null
    }
}

const mapStateToProps = (state) => {
    const recipes = state.search.recipes
    return { recipes: recipes }
}


export default connect(mapStateToProps)(Recipe)