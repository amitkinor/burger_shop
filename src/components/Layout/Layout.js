import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'

function Layout(props) {
  return (
    <React.Fragment>
      <div>
         Toolbar, SideDrawer Backdrop
      </div>
      <main className={styles.Content}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

Layout.propTypes = {

}

export default Layout

