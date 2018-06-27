import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import styles from "./AttributeSelect.css";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AttributeSelect = ({ attributeName, value, setHeroAttr }) => (
  <Fragment>
    <div className={styles.AttributeSelect__Text}>
      {attributeName.slice(0, 1).toUpperCase() + attributeName.slice(1)}
    </div>
    <select
      name={attributeName}
      className={styles.AttributeSelect}
      value={value}
      onChange={setHeroAttr}
    >
      {options.map(opt => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  </Fragment>
);

AttributeSelect.propTypes = {
  attributeName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setHeroAttr: PropTypes.func
};

AttributeSelect.defaultProps = {
  attributeName: "",
  value: "",
  setHeroAttr: () => {}
};

export default AttributeSelect;
