import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./AttributeSelect.css";

const attributeValueList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class AttributeSelect extends Component {
  state = {
    newHeroAttr: this.props.attributeName
  };

  selectHeroAttr = evt => {
    const heroAttrValue = evt.target.value;
    this.setState({
      newHeroAttr: heroAttrValue
    });
    this.props.setHeroAttr(heroAttrValue);
  };

  render() {
    const { attributeName } = this.props;
    const { newHeroAttr } = this.state;
    return (
      <select
        name={attributeName}
        className={styles.AttributeSelect}
        value={newHeroAttr}
        onChange={this.selectHeroAttr}
      >
        <option value={attributeName} disabled>
          {attributeName.slice(0, 1).toUpperCase() + attributeName.slice(1)}
        </option>
        {attributeValueList.map(attributeValue => (
          <option value={attributeValue} key={attributeValue}>
            {attributeValue}
          </option>
        ))}
      </select>
    );
  }
};

AttributeSelect.propTypes = {
  attributeName: PropTypes.string.isRequired,
  setHeroAttr: PropTypes.func
};

AttributeSelect.defaultProps = {
  attributeName: "",
  setHeroAttr: () => {}
};

export default AttributeSelect;
