import React from 'react';
import PropTypes from "prop-types";
import AvailableHeroCard from "../AvailableHeroCard/AvailableHeroCard";

const HeroesList = ({ searchedHeroes, destroyHero, moveHero }) =>
  searchedHeroes.map(hero => (
    <AvailableHeroCard
      key={hero.id}
      {...hero}
      destroyHero={destroyHero}
      moveHero={moveHero}
    />
  ));

HeroesList.propTypes = {
  visibleHeroesList: PropTypes.arrayOf(PropTypes.element)
};

HeroesList.defaultProps = {
  visibleHeroesList: []
};

export default HeroesList;
