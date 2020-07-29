import React from 'react';
import burgerLogo from '../../assets/images/burger-real-logo.png';
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <img className={classes.img} src={burgerLogo} alt="Logo" />
    </div>
  );
}
