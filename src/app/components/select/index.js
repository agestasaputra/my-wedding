import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import { P3 } from "app/components/font";

const Sort = ({ items, sortBy }) => {
  return (
    <Container className="sort">
      <P3>{items ? `${items} items` : `0 items`} |&nbsp;</P3>
      <label htmlFor="sort">
        <P3>Sort By &nbsp;</P3>
      </label>
      <select id="sort">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </Container>
  );
};

Sort.propTypes = {
  items: PropTypes.number,
  sortBy: PropTypes.array
};

export default Sort;
