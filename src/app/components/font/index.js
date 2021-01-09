import React from "react";
import {
  H1Styles,
  H2Styles,
  H3Styles,
  H4Styles,
  H5Styles,
  H6Styles,
  P1Styles,
  P2Styles,
  P3Styles
} from "./styles";

const H1 = props => {
  return (
    <H1Styles
      onClick={props.onClick && props.onClick}
      className={props.className && props.className}
    >
      {props.children}
    </H1Styles>
  );
};

const H2 = props => {
  return (
    <H2Styles className={props.className && props.className}>
      {props.children}
    </H2Styles>
  );
};

const H3 = props => {
  return (
    <H3Styles className={props.className && props.className}>
      {props.children}
    </H3Styles>
  );
};

const H4 = props => {
  return (
    <H4Styles className={props.className && props.className}>
      {props.children}
    </H4Styles>
  );
};

const H5 = props => {
  return (
    <H5Styles className={props.className && props.className}>
      {props.children}
    </H5Styles>
  );
};

const H6 = props => {
  return (
    <H6Styles className={props.className && props.className}>
      {props.children}
    </H6Styles>
  );
};

const P1 = props => {
  return (
    <P1Styles
      onClick={props.onClick && props.onClick}
      className={props.className && props.className}
    >
      {props.children}
    </P1Styles>
  );
};

const P2 = props => {
  return (
    <P2Styles
      onClick={props.onClick && props.onClick}
      className={props.className && props.className}
    >
      {props.children}
    </P2Styles>
  );
};

const P3 = props => {
  return (
    <P3Styles
      onClick={props.onClick && props.onClick}
      className={props.className && props.className}
    >
      {props.children}
    </P3Styles>
  );
};

export { H1, H2, H3, H4, H5, H6, P1, P2, P3 };
