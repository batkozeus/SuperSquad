import React from 'react';
import PropTypes from "prop-types";
import styles from "./SquadHeroCard.css";
import DeleteHeroIcon from "../../assets/images/if__trash_80988.png";
import ShowHeroInfoIcon from "../../assets/images/if_ic_info_48px_352431.png";

const SquadHeroCard = ({
  name,
  id,
  showHeroInfo,
  retireHero
}) => {
  
  const representHeroInfo = () => {
    showHeroInfo(id);
  };

  const removeHero = () => {
    retireHero(id);
  };

  return <div className={styles.SquadHeroCard}>
      <h3 className={styles.SquadHeroCard__Header}>{name}</h3>
      <div className={styles.SquadHeroCard__BtnList}>
        <div onClick={removeHero} role="presentation">
          <img className={styles.SquadHeroCard__Btn} src={DeleteHeroIcon} alt="DeleteHeroIcon" />
        </div>
        <div onClick={representHeroInfo} role="presentation">
          <img className={styles.SquadHeroCard__Btn} src={ShowHeroInfoIcon} alt="ShowHeroInfoIcon" />
        </div>
      </div>
    </div>;
};

SquadHeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showHeroInfo: PropTypes.func,
  retireHero: PropTypes.func
};

SquadHeroCard.defaultProps = {
  showHeroInfo: () => {},
  retireHero: () => {}
};

export default SquadHeroCard;
