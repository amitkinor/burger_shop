import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../UI/Button/Button.js'

function OrderSummary(props) {
  
  const ingredientSummary = Object.keys(props.ingredients)
    .map( (ing) => {
    return (
    <li key={ing}> 
      <span style={{textTransform:'capitalize'}}>{ing}
      </span>
        :
        {props.ingredients[ing]}
    </li>)
    })

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>1 burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button
        clicked={props.purchaseCancelled}
        btnType="Danger">
          Cancel
      </Button>
      <Button
        clicked={props.PurchaseContinue}
        btnType="Success">
          Checkout
      </Button>
    </React.Fragment>
  )
}

OrderSummary.propTypes = {
  purchaseCancelled: PropTypes.func.isRequired,
  PurchaseContinue: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
}

export default OrderSummary


