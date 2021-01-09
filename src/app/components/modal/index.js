import React from "react";
import { Container } from "./styles";
import { H3 } from "app/components/font";
import { X } from "react-feather";

const Modal = props => {
  return (
    <Container.Wrapper>
      <Container.Header>
        <H3 className="title">{props.title}</H3>
        <X size="24" className="close" onClick={() => props.show(false)} />
      </Container.Header>
      {props.children}
    </Container.Wrapper>
  );
};

export default Modal;
