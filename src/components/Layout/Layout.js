import React from 'react'
import PropTypes from 'prop-types'
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <React.Fragment>
      <div>
         Toolbar, SideDrawer Backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

Layout.propTypes = {

}

export default Layout

