import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BurgerBuilder extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <React.Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
      </React.Fragment>
    )
  }
}
