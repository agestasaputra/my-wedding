import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;
    background: ${color.brand.primaryBlack};
    padding: 0% 5% 5% 5%;
    width: 100%;
    left: 0px;
    position: absolute;
  `,
  Top: styled.div`
    text-align: center;
    padding: 5% 0%;

    img {
      width: 6vw;
      height: 6vw;
    }
  `,
  Bottom: styled.div`
    display: flex;
    flex-flow: row nowrap;

    h4 {
      color: ${color.brand.primaryWhite};
    }

    a {
      text-decoration: unset;

      h4 {
        color: ${color.brand.primaryWhite};

        &:hover {
          color: burlywood;
        }
      }

      h5 {
        line-height: 35px;
        color: ${color.brand.primaryWhite};
        font-weight: unset;

        &:hover {
          color: burlywood;
        }
      }
    }
  `
};

export const ContainerBottom = {
  Youthway: styled.div`
    flex: 1;
  `,
  Customer: styled.div`
    flex: 1;
  `,
  Help: styled.div`
    flex: 2;
  `,
  SocialMedia: styled.div`
    flex: 1;
  `
};

export const Youthway = {
  Top: styled.div`
    height: 4vw;
  `,
  Bottom: styled.div`
    flex: 1;
  `
};

export const Customer = {
  Top: styled.div`
    height: 4vw;
  `,
  Bottom: styled.div`
    flex: 1;
  `
};

export const SocialMedia = {
  Top: styled.div`
    height: 4vw;
  `,
  Bottom: styled.div`
    flex: 1;
  `
};

export const Help = {
  Top: styled.div`
    height: 4vw;
  `,
  Bottom: styled.div`
    flex: 1;
  `
};
