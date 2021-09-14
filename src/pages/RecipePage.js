import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { RecipePageWrapper } from './styles'

class RecipePage extends Component {
    componentDidMount() {
        this.props.findRecipe(this.props.match.params.id)
    }

    render() {
        // this conditional statement is so that the component would return null or the recipe information based on the Redux state
        if(this.props.isFetching) return null
        if(this.props.recipe === null) return null
    
        let recipe = this.props.recipe[0]
        const listOfIngredients = recipe.ingredients.map(ingredient => (
            <li key={ingredient._id}>{ingredient.name}: {ingredient.amount} {ingredient.unit}</li>
        ))

        return (
            <RecipePageWrapper>
                <div>
                    <h1>{recipe.name}</h1>
                    <h3>Ingredients: <br></br><ul>{listOfIngredients}</ul></h3>
                    <h3>Instructions: {recipe.instructions}</h3>
                </div>
            </RecipePageWrapper>
        )
    }
} 

const mapStateToProps = (state) => {
    const { recipe } = state
    return { ...recipe }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    findRecipe: actions.findRecipe,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)