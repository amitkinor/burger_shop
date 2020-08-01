/* eslint-disable react/state-in-constructor */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const updatedIngredients = { ...ingredients };

    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const updatedIngredients = { ...ingredients };

    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    updatedIngredients[type] = updatedCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceSubtraction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ing) => {
        return ingredients[ing];
      })
      .reduce((totalSum, el) => {
        return totalSum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  purchaseToggleHandler = (bool) => {
    this.setState({ purchasing: bool });
  };

  PurchaseContinueHandler = () => {
    // eslint-disable-next-line no-alert
    alert('Continue Pressed');
  };

  render() {
    const { ingredients, purchasing, totalPrice, purchasable } = this.state;

    const disabledInfo = {
      ...ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Modal
          show={purchasing}
          modalClosed={() => this.purchaseToggleHandler(false)}
        >
          <OrderSummary
            ingredients={ingredients}
            purchaseCancelled={() => this.purchaseToggleHandler(false)}
            PurchaseContinue={this.PurchaseContinueHandler}
            price={totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={purchasable}
          price={totalPrice}
          ordered={() => this.purchaseToggleHandler(true)}
        />
      </>
    );
  }
}
