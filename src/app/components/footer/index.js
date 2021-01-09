import React from "react";
import {
  Container,
  ContainerBottom,
  Youthway,
  Customer,
  Help,
  SocialMedia
} from "./styles";
import YouthwayLogo from "app/assets/logo/youthway-logo.png";
import { NavLink } from "react-router-dom";
import { H4, H5 } from "app/components/font";
// import fb from "app/assets/logo/fb.png";
// import ig from "app/assets/logo/ig.png";
// import tw from "app/assets/logo/tw.png";

const Footer = () => {
  return (
    <Container.Wrapper>
      <Container.Top>
        <img src={YouthwayLogo} alt="logo-youthway" />
      </Container.Top>
      <Container.Bottom>
        <ContainerBottom.Youthway>
          <Youthway.Top>
            <H4>Youthway</H4>
          </Youthway.Top>
          <Youthway.Bottom>
            <NavLink to={"/heritage"}>
              <H5>Our Heritage</H5>
            </NavLink>
            <NavLink to={"/location"}>
              <H5>Store Location</H5>
            </NavLink>
            <NavLink to={"/careers"}>
              <H5>Career Us</H5>
            </NavLink>
            <NavLink to={"/gift"}>
              <H5>Holiday Gift Guide</H5>
            </NavLink>
          </Youthway.Bottom>
        </ContainerBottom.Youthway>
        <ContainerBottom.Customer>
          <Customer.Top>
            <H4>Customer Service</H4>
          </Customer.Top>
          <Customer.Bottom>
            <NavLink to={"/contact-us"}>
              <H5>Contact Us</H5>
            </NavLink>
            <NavLink to={"/s"}>
              <H5>FAQs</H5>
            </NavLink>
            <NavLink to={"/men-size-guide"}>
              <H5>Men's Size Guide</H5>
            </NavLink>
            <NavLink to={"/women-size-guide"}>
              <H5>Women's Size Guide</H5>
            </NavLink>
          </Customer.Bottom>
        </ContainerBottom.Customer>
        <ContainerBottom.Help>
          <Help.Top>
            <H4>Help</H4>
          </Help.Top>
          <Help.Bottom>
            <NavLink to={"/shipping-and-delivery"}>
              <H5>Shipping & Delivery</H5>
            </NavLink>
            <NavLink to={"/returns"}>
              <H5>Returns</H5>
            </NavLink>
          </Help.Bottom>
        </ContainerBottom.Help>
        <ContainerBottom.SocialMedia>
          <SocialMedia.Top>
            <H4>Follow Us</H4>
          </SocialMedia.Top>
          <SocialMedia.Bottom>
            <NavLink to={"/instagram"}>
              <H5>Instagram</H5>
              {/* <img src={ig} alt="ig-youthway" /> */}
            </NavLink>
            <NavLink to={"/facebook"}>
              <H5>Facebook</H5>
              {/* <img src={fb} alt="fb-youthway" /> */}
            </NavLink>
            <NavLink to={"/twitter"}>
              <H5>Twitter</H5>
              {/* <img src={tw} alt="twitter-youthway" /> */}
            </NavLink>
          </SocialMedia.Bottom>
        </ContainerBottom.SocialMedia>
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default Footer;
