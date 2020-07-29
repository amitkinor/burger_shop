import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

function Button(props) {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')} 
      onClick={props.clicked}
       >
      {props.childern}
    </button>
  )
}

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired
}

export default Button