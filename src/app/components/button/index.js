import React from "react";
import { Container, Wrapper } from "./styles";

const Button = props => {
  return (
    <Wrapper
      width={props.width && props.width}
      className={props.className && props.className}
    >
      <Container
        // width={props.width && props.width}
        className={props.className && props.className}
        // onClick={() => props.funcPage && props.funcPage(props.children)}
        onClick={
          props.className === "btn-page"
            ? () => props.funcPage && props.funcPage(props.children)
            : props.onClick && props.onClick
        }
      >
        {props.children}
      </Container>
    </Wrapper>
  );
};

export default Button;
