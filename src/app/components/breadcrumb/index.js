import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { P3 } from "app/components/font";

const Breadcrumb = ({ path }) => {
  const [newPath, setNewPath] = React.useState(null);
  React.useEffect(() => {
    let tmp = path.split("/");
    let filterTmp = [];
    tmp.filter(item => item && filterTmp.push(item));
    setNewPath(filterTmp);
  }, [path]);

  return (
    <Container className="breadcrumb">
      {newPath ? (
        <NavLink to="/">
          <P3>Home</P3>
        </NavLink>
      ) : null}
      {newPath &&
        newPath.map((item, index) => (
          <NavLink to={`/${item.toLowerCase()}`} key={index}>
            <P3>{newPath ? ` / ${item.toLowerCase()}` : null}</P3>
          </NavLink>
        ))}
    </Container>
  );
};

Breadcrumb.propTypes = {
  path: PropTypes.string
};

export default Breadcrumb;
