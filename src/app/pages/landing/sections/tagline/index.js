import React from "react";
import { Container } from "./styles";
import { H1, H2 } from "app/components/font";

const Tagline = ({ img }) => {
  return (
    <Container.Wrapper>
      <Container.Top>
        <img src={img} alt="icon-youthway" />
      </Container.Top>
      <Container.Bottom>
        <H1>"Live your style with us"</H1>
        <hr />
        <H2>- YOUTHWAY -</H2>
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default Tagline;
