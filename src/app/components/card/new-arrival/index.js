import React from "react";
import {
  Container,
  ContainerBottom,
  ContainerBottomLeft,
  ContainerBottomMiddle,
  ContainerBottomRight
} from "./styles";
import { Heart, Circle, PlusCircle } from "react-feather";
import { H5 } from "app/components/font";
import { NavLink } from "react-router-dom";

const CardNewArrival = props => {
  return (
    <NavLink
      to={
        props.location ? `/products/${props.type}/${props.productCode}` : null
      }
    >
      {/* <NavLink to={`${props.location.pathname }/${props.productCode}`}> */}
      <Container.Wrapper width={props.width}>
        <Container.Top>
          <img src={props.img} alt={props.title} />
        </Container.Top>
        <Container.Bottom>
          <ContainerBottom.Left>
            <ContainerBottomLeft.Top>
              <H5>Men</H5>&nbsp;<H5>Women</H5>
            </ContainerBottomLeft.Top>
            <ContainerBottomLeft.Bottom>
              {/* <H5>{props.productCode}</H5> */}
            </ContainerBottomLeft.Bottom>
          </ContainerBottom.Left>
          <ContainerBottom.Middle>
            <ContainerBottomMiddle.Left>
              <PlusCircle color="black" size="20" />
            </ContainerBottomMiddle.Left>
            <ContainerBottomMiddle.Right>
              <Heart color="black" size="20" />
            </ContainerBottomMiddle.Right>
          </ContainerBottom.Middle>
          <ContainerBottom.Right>
            <ContainerBottomRight.Top>
              <Circle
                className={`circle-${props.color[0]}`}
                color="black"
                size="12"
              />
              <Circle
                className={`circle-${props.color[1]}`}
                color="black"
                size="12"
              />
              <Circle
                className={`circle-${props.color[2]}`}
                color="black"
                size="12"
              />
            </ContainerBottomRight.Top>
            <ContainerBottomRight.Bottom>
              <H5>{`IDR ${props.price}`}</H5>
            </ContainerBottomRight.Bottom>
          </ContainerBottom.Right>
        </Container.Bottom>
      </Container.Wrapper>
    </NavLink>
  );
};

export default CardNewArrival;
