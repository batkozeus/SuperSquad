import React from 'react';
import PropTypes from "prop-types";
import styles from "./HeroesFilter.css";

const HeroesFilter = ({ filteredHeroName, filterHeroes }) => (
    <div className={styles.HeroesFilter}>
      <input
        className={styles.HeroesFilter__Input} 
        value={filteredHeroName}
        onChange={e => filterHeroes(e.target.value)}
        type="text"
        placeholder="Search by name"
      />
    </div>
  );

HeroesFilter.propTypes = {
  filteredHeroName: PropTypes.string.isRequired,
  filterHeroes: PropTypes.func
};

HeroesFilter.defaultProps = {
  filteredHeroName: '',
  filterHeroes: () => {}
};

export default HeroesFilter;
