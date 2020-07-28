import React from 'react'
import PropTypes from 'prop-types'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

function Burger(props) {

  const ingredients = props.ingredients;

  /*
    1.  Creating an array with nested arrays the size of "amount"
    2.  Inserting <BurgerIngredient> in all cells
  */
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])]
        .map((_, i) => 
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      );
    })
    .reduce((prev,curr) => {
      return prev.concat(curr)
    }, []);


  /*
    notifying the user to add ingrds if empty
  */
  if (transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>
  }


  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}      
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

Burger.propTypes = {

}

export default Burger

