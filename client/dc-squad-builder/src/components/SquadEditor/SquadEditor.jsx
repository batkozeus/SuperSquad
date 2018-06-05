import React from "react";
import PropTypes from "prop-types";
import styles from "./SquadEditor.css";
import styles2 from "../Button/Button.css";
import Button from "../Button/Button";
import SaveSquadIcon from "../../assets/images/if_save_326688.png";
import ResetSquadIcon from "../../assets/images/if_154_111057.png";

const SquadEditor = ({ resetHeroes, composeSquad, totalAttrInfo, children }) => 
  (
  <div className={styles.SquadEditor}>
    <div className={styles.SquadEditor__TotalAttrInfo}>
      <div
        className={styles.SquadEditor__singleAttrInfo}
      >{`Strength: ${totalAttrInfo.reduce(
        (acc, hero) => acc + hero.strength,
        0
      )}`}</div>
      <div
        className={styles.SquadEditor__singleAttrInfo}
      >{`Intelligence: ${totalAttrInfo.reduce(
        (acc, hero) => acc + hero.strength,
        0
      )}`}</div>
      <div
        className={styles.SquadEditor__singleAttrInfo}
      >{`Speed: ${totalAttrInfo.reduce(
        (acc, hero) => acc + hero.speed,
        0
      )}`}</div>
    </div>
    <div className={styles.SquadEditor__ButtonContainer}>
      <Button btnTitle="Save Squad" btnClick={composeSquad}>
        <img
          className={styles2.Button__Image}
          src={SaveSquadIcon}
          alt="SaveSquadIcon"
        />
      </Button>
      <Button btnTitle="Reset Editor" btnClick={resetHeroes}>
        <img
          className={styles2.Button__Image}
          src={ResetSquadIcon}
          alt="ResetSquadIcon"
        />
      </Button>
    </div>
    {children}
  </div>
);

SquadEditor.propTypes = {
  totalAttrInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      strength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      intelligence: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.number.isRequired
    })
  ),
  children: PropTypes.arrayOf(PropTypes.element),
  composeSquad: PropTypes.func,
  resetHeroes: PropTypes.func
};

SquadEditor.defaultProps = {
  totalAttrInfo: [],
  children: [],
  composeSquad: () => {},
  resetHeroes: () => {}
};

export default SquadEditor;
