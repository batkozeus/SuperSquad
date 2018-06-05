import React from 'react';
import PropTypes from "prop-types";
import styles from "./SquadCard.css";
import DeleteSquadIcon from "../../assets/images/if__trash_80988.png";

const SquadCard = ({ heroes, stats, id, destroySquad }) => {
  const removeSquad = () => {
    destroySquad(id);
  };

  return <div className={styles.SquadCard}>
      <div className={styles.SquadCard__Section}>
        <h3 className={styles.SquadCard__Header}>Heroes:</h3>
        <ul className={styles.SquadCard__HeroesList}>
          {heroes.map(hero => <li key={hero.id}>{hero.name}</li>)}
        </ul>
      </div>
      <div className={styles.SquadCard__Section}>
        <h3 className={styles.SquadCard__Header}>Stats:</h3>
        <div className={styles.SquadCard__StatsList}>{`Strength: ${stats.str}`}</div>
        <div className={styles.SquadCard__StatsList}>{`Intelligence: ${stats.int}`}</div>
        <div className={styles.SquadCard__StatsList}>{`Speed: ${stats.spd}`}</div>
      </div>
      <div onClick={removeSquad} role="presentation">
        <img className={styles.SquadCard__DeleteBtn} src={DeleteSquadIcon} alt="DeleteSquadIcon" />
      </div>
    </div>;
};

SquadCard.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      strength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      intelligence: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ),
  stats: PropTypes.shape({
    str: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    int: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    spd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }),
  id: PropTypes.number.isRequired,
  destroySquad: PropTypes.func
};

SquadCard.defaultProps = {
  heroes: [],
  stats: {},
  destroySquad: () => {}
};

export default SquadCard;
