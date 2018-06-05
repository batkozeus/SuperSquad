import React from 'react';
import PropTypes from "prop-types";
import styles from "./AvailableHeroCard.css";
import AddToSquadIcon from "../../assets/images/if_add_user_309049.png";
import DeleteHeroIcon from "../../assets/images/if__trash_80988.png";
import ShowHeroInfoIcon from "../../assets/images/if_ic_info_48px_352431.png";

const HeroCard = ({ name, strength, intelligence, speed, id, destroyHero, moveHero }) => {
  const showHeroInfo = () => {
    console.log(
      `${name} stats:\n strength-${strength}\n intelligence-${intelligence}\n speed-${speed}`
    );
  };

  const removeHero = () => {
    destroyHero(id);
  };

  const addToSquadHero = () => {
    moveHero(id);
  };

  return (
    <div className={styles.HeroCard}>
      <h3 className={styles.HeroCard__Header}>{name}</h3>
      <div className={styles.HeroCard__BtnList}>
        <div onClick={addToSquadHero} role="presentation">
          <img
            className={styles.HeroCard__Btn}
            src={AddToSquadIcon}
            alt="AddToSquadIcon"
          />
        </div>      
        <div onClick={removeHero} role="presentation">
          <img
            className={styles.HeroCard__Btn}
            src={DeleteHeroIcon}
            alt="DeleteHeroIcon"
          />
        </div>
        <div onClick={showHeroInfo} role="presentation">
          <img
            className={styles.HeroCard__Btn}
            src={ShowHeroInfoIcon}
            alt="ShowHeroInfoIcon"
          />
        </div>       
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  strength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  intelligence: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.number.isRequired,
  destroyHero: PropTypes.func,
  moveHero: PropTypes.func
};

HeroCard.defaultProps = {
  destroyHero: () => {},
  moveHero: () => {}
};

export default HeroCard;
