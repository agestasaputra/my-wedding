import React from "react";
import { Container } from "./styles";

const Size = ({ size, className, onClick }) => {
  return <Container className={className && className} onClick={onClick && onClick}>{size}</Container>;
};

export default Size;
