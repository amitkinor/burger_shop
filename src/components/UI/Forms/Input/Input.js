/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

function Input(props) {
  const { value, label, elementType, elementConfig, inputChangedHandler} = props;

  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.Input}
          {...elementConfig}
          value={value}
          onChange={inputChangedHandler}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.Input}
          {...elementConfig}
          value={value}
          onChange={inputChangedHandler}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={classes.Input}
          value={value}
          onChange={inputChangedHandler}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.Input}
          {...elementConfig}
          value={value}
          onChange={inputChangedHandler}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
}

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputChangedHandler: PropTypes.func.isRequired,
};

export default Input;
