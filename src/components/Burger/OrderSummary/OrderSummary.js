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
      <p>Continue to checkout</p>
      <Button>yoyo</Button>
      <button>Continue</button>
    </React.Fragment>
  )
}

OrderSummary.propTypes = {

}

export default OrderSummary

