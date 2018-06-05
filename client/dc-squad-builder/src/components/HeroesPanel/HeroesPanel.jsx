import React from 'react';
import PropTypes from "prop-types";
import styles from "./HeroesPanel.css";

const HeroesPanel = ({ cardTitle, children }) => 
  (<div className={styles.HeroesPanel}>
      <h2 className={styles.HeroesPanel__Header}>{cardTitle}</h2>
      {children}
    </div>);

HeroesPanel.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any
  ])
};

HeroesPanel.defaultProps = {
  children: null
};

export default HeroesPanel;
