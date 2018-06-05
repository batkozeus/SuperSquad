import React from 'react';
import PropTypes from "prop-types";
import styles from "./Button.css";

const Button = ({ children, btnTitle, btnClick }) => 
  (<button className={styles.Button} onClick={btnClick}>
    {children}
    <div className={styles.Button__Title}>{btnTitle}</div>
  </button>);

Button.propTypes = {
  children: PropTypes.element,
  btnTitle: PropTypes.string.isRequired,
  btnClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  btnClick: () => {}
};

export default Button;
