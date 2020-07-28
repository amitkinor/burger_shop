import React from 'react'
import PropTypes from 'prop-types'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css';

const controls = [
  {label: 'Salad', type:'salad'},
  {label: 'Cheese', type:'cheese'},
  {label: 'Bacon', type:'bacon'},
  {label: 'Meat', type:'meat'},
];




function BuildControls(props) {
  return (
    <div className={styles.BuildControls}>
      {controls.map(ing => (
        <BuildControl
           ingAdded = { () => props.ingredientAdded(ing.type) }
           key = { ing.label }
           label = { ing.label }
           ingRemoved ={ () => props.ingredientRemoved(ing.type) }
           disabled = {props.disabledInfo[ing.type]}
           />
       ))}
    </div>
  )
}

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired
}

export default BuildControls

