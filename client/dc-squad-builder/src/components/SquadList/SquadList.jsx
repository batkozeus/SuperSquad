import React from 'react';
import PropTypes from "prop-types";
import SquadCard from "../SquadCard/SquadCard";

const SquadList = ({ squads, destroySquad }) =>
  squads.map(squad => (
    <SquadCard
      key={squad.id}
      {...squad}
      destroySquad={destroySquad}
    />
  ));

SquadList.propTypes = {
  visibleHeroesList: PropTypes.arrayOf(PropTypes.element)
};

SquadList.defaultProps = {
  visibleHeroesList: []
};

export default SquadList;
