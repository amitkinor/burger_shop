import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

function BuildControl(props) {
  return (
    <div className={styles.BuildControl}>
      <button
        className={styles.Less}
        onClick={props.ingRemoved}
        disabled={props.disabled}>
          Less
      </button>
      <div className={styles.Label}>
        {props.label}
      </div>
      <button
        className={styles.More}
        onClick={props.ingAdded}>
          More
      </button>
    </div>
  )
};

BuildControl.propTypes = {
  label : PropTypes.string.isRequired,
  ingAdded : PropTypes.func.isRequired,
  ingRemoved : PropTypes.func.isRequired
};

export default BuildControl;

