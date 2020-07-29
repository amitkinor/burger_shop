import React from 'react'
import PropTypes from 'prop-types'
import classes from './Modal.module.css'
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'

function Modal(props) {
  return (
    <div className={classes.Modal}>
      {props.children}
    </div>
  )
}

Modal.propTypes = {

}

export default Modal

