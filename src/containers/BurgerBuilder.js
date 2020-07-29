import React, { Component } from 'react'
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
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
    this.updatePurchaseState(updatedIngredients);
    
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

    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
        .map(ing => {
          return ingredients[ing]
        })
        .reduce((sum, el) => {
          return sum + el;
        },0);
    this.setState({purchasable: sum > 0});
  }

  purchaseToggleHandler = (bool) => {
    this.setState({purchasing: bool})
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
        <Modal show={this.state.purchasing} modalClosed={() => this.purchaseToggleHandler(false)}> 
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={() => this.purchaseToggleHandler(true)}
          />
      </React.Fragment>
    )
  }
}

