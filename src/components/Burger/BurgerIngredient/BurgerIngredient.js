import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.css'

/*
//  returns a div with ingredient style
*/
function BurgerIngredient(props) {
    
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case ('top-bread'):
      ingredient = (
        <div className={styles.BreadBottom}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case('meat'):
        ingredient = <div className={styles.Meat}></div>;
      break;
    case('Cheese'):
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case('Salad'):
        ingredient = <div className={styles.Salad}></div>;
      break;
    case('Bacon'):
        ingredient = <div className={styles.Bacon}></div>;
      break;

    default:
      ingredient = null;
      break;
  }
  
  return ingredient;
}

BurgerIngredient.propTypes = {

}

export default BurgerIngredient

