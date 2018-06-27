import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./HeroConstructor.css";
import styles2 from "../Button/Button.css";
import AttributeSelect from "../AttributeSelect/AttributeSelect";
import Button from "../Button/Button";
import AddHeroIcon from "../../assets/images/if_pencil_383095.png";

const INITIAL_STATE = {
  name: "",
  strength: "1",
  intelligence: "1",
  speed: "1"
};

class HeroConstructor extends Component {
  state = {
    ...INITIAL_STATE
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, strength, intelligence, speed } = this.state;

    const newHero = {
      name,
      strength: Number(strength),
      intelligence: Number(intelligence),
      speed: Number(speed)
    };

    if (name === "" || isNaN(strength) || isNaN(intelligence) || isNaN(speed)) {
      alert("Check input value!");
      return;
    }

    this.props.formHero(newHero);
    this.resetEditor();
  };

  resetEditor = () => this.setState({ ...INITIAL_STATE });

  render() {
    const {
      name,
      strength,
      intelligence,
      speed
    } = this.state;

    return (
      <form className={styles.HeroConstructor} onSubmit={this.handleSubmit}>
        <input
          className={styles.HeroConstructor__NameInput}
          name="name"
          value={name}
          onChange={this.onInputChange}
          type="text"
          placeholder="Hero name"
        />

        <AttributeSelect
          attributeName="strength"
          value={strength}
          setHeroAttr={this.onInputChange}
        />
        <AttributeSelect
          attributeName="intelligence"
          value={intelligence}
          setHeroAttr={this.onInputChange}
        />
        <AttributeSelect
          attributeName="speed"
          value={speed}
          setHeroAttr={this.onInputChange}
        />

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
