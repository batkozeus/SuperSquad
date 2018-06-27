import React from 'react';
import PropTypes from "prop-types";
import SquadHeroCard from "../SquadHeroCard/SquadHeroCard";

const SquadMembers = ({ squadHeroes, showHeroInfo, retireHero }) =>
  squadHeroes.map(hero => (
    <SquadHeroCard
      key={hero.id}
      {...hero}
      showHeroInfo={showHeroInfo}
      retireHero={retireHero}
    />
  ));

SquadMembers.propTypes = {
  visibleHeroesList: PropTypes.arrayOf(PropTypes.element)
};

SquadMembers.defaultProps = {
  visibleHeroesList: []
};

export default SquadMembers;
