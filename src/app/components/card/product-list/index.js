import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ContainerBottom,
  ContainerBottomLeft,
  ContainerBottomMiddle,
  ContainerBottomRight
} from "./styles";
import { Heart, Circle, PlusCircle } from "react-feather";
import { H5 } from "app/components/font";

const ProductList = props => {
  return (
    <Container.Wrapper>
      <Container.Top>
        <img src={props.img} alt={props.title} />
      </Container.Top>
      <Container.Bottom>
        <ContainerBottom.Left>
          <ContainerBottomLeft.Top>
            <H5>Men</H5>&nbsp;<H5>Women</H5>
          </ContainerBottomLeft.Top>
          <ContainerBottomLeft.Bottom>
            <H5>{props.title}</H5>
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
  );
};

ProductList.propTypes = {
  title: PropTypes.string,
  gender: PropTypes.array,
  color: PropTypes.array,
  price: PropTypes.number
};

export default ProductList;
