import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import styles from "./HeroConstructor.css";
import styles2 from "../Button/Button.css";
import AttributeSelect from "../AttributeSelect/AttributeSelect";
import Button from "../Button/Button";
import AddHeroIcon from "../../assets/images/if_pencil_383095.png";

class HeroConstructor extends Component {
  state = {
    newHeroName: "",
    newHeroStrength: "strength",
    newHeroIntelligence: "intelligence",
    newHeroSpeed: "speed",
    resetAttributes: false
  };

  setHeroName = evt => {
    const heroNameValue = evt.target.value;
    this.setState({
      newHeroName: heroNameValue
    });
  };

  setHeroStrength = heroStrengthValue => {
    this.setState({
      newHeroStrength: Number(heroStrengthValue)
    });
  };

  setHeroIntelligence = heroIntelligenceValue => {
    this.setState({
      newHeroIntelligence: Number(heroIntelligenceValue)
    });
  };

  setHeroSpeed = heroSpeedValue => {
    this.setState({
      newHeroSpeed: Number(heroSpeedValue)
    });
  };

  setHero = evt => {
    evt.preventDefault();
    const {
      newHeroName,
      newHeroStrength,
      newHeroIntelligence,
      newHeroSpeed
    } = this.state;
    const newHero = {
      name: newHeroName,
      strength: newHeroStrength,
      intelligence: newHeroIntelligence,
      speed: newHeroSpeed
    };
    if (
      newHeroName === "" ||
      isNaN(newHeroStrength) ||
      isNaN(newHeroIntelligence) ||
      isNaN(newHeroSpeed)
    ) {
      alert("Check input value!");
    } else {
      this.props.formHero(newHero);
      this.setState({ newHeroName: "" });
      this.setState({ newHeroStrength: "strength" });
      this.setState({ newHeroIntelligence: "intelligence" });
      this.setState({ newHeroSpeed: "speed" });
      this.setState({ resetAttributes: true });
      setTimeout(() => {
        this.setState({ resetAttributes: false });
      }, 10);
    }
  };

  render() {
    const { newHeroName, resetAttributes } = this.state;
    return (
      <form className={styles.HeroConstructor} onSubmit={this.setHero}>
        <input
          className={styles.HeroConstructor__NameInput}
          value={newHeroName}
          onChange={this.setHeroName}
          type="text"
          placeholder="Hero name"
        />
        {!resetAttributes && (
          <Fragment>
            <AttributeSelect
              attributeName="strength"
              setHeroAttr={this.setHeroStrength}
            />
            <AttributeSelect
              attributeName="intelligence"
              setHeroAttr={this.setHeroIntelligence}
            />
            <AttributeSelect
              attributeName="speed"
              setHeroAttr={this.setHeroSpeed}
            />
          </Fragment>
        )}
        <Button type="submit" btnTitle="Add hero">
          <img
            className={styles2.Button__Image}
            src={AddHeroIcon}
            alt="AddHeroIcon"
          />
        </Button>
      </form>
    );
  }
};

HeroConstructor.propTypes = {
  formHero: PropTypes.func
};

HeroConstructor.defaultProps = {
  formHero: () => {}
};

export default HeroConstructor;
