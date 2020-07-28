import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients:  updatedIngredients,
      totalPrice: newPrice
    });

    console.log(this.state);
    console.log(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}
    
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0){return} ;
    const updatedCount = oldCount - 1;
    updatedIngredients[type] = updatedCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;

    this.setState({
      ingredients:  updatedIngredients,
      totalPrice: newPrice
    });

    console.log(this.state);
    console.log(updatedIngredients);
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          />
      </React.Fragment>
    )
  }
}

BurgerBuilder.propTypes = {

}
