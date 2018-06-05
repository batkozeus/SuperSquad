import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./HeroesFilter.css";

class HeroesFilter extends Component {
  state = {
    filteredHeroName: ""
  };

  filterHero = (evt) => {
    const heroNameValue = evt.target.value;
    this.setState({
      filteredHeroName: heroNameValue
    });
    this.props.filterHeroes(heroNameValue);
  }

  render() {
    const { filteredHeroName } = this.state;
    return (
      <div className={styles.HeroesFilter}>
        <input
          className={styles.HeroesFilter__Input} 
          value={filteredHeroName}
          onChange={this.filterHero}
          type="text"
          placeholder="Search by name"
        />
      </div>
    );
  }
};

HeroesFilter.propTypes = {
  filterHeroes: PropTypes.func
};

HeroesFilter.defaultProps = {
  filterHeroes: () => {}
};

export default HeroesFilter;
