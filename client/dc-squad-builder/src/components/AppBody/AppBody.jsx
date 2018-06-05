import React from 'react';
import PropTypes from "prop-types";
import styles from "./AppBody.css";

const AppBody = ({children}) => <div className={styles.AppBody}>{children}</div>;

AppBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any
  ])
};

AppBody.defaultProps = {
  children: null
};

export default AppBody;
