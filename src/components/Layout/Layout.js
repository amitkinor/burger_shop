import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbal/Toolbar';

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}
