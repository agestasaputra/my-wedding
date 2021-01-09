import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 12% 0% 15% 0%;
    margin-top: 5%;
    /* background: rgba(0, 0, 0, 0.125); */
    background: rgba(0, 25, 30, 0.03);
  `,
  Top: styled.div`
    text-align: center;

    img {
      width: 15vw;
      height: 15vw;
      margin-bottom: 2%;
    }
  `,
  Bottom: styled.div`
    text-align: center;

    h1 {
      font-family: "TW Cen MT";
      margin-bottom: 1%;
      font-weight: unset;
      font-size: 2.928vw;
      color: ${color.brand.primaryBlack};
    }

    hr {
      width: 20%;
      margin: 2% auto 1% auto;
      text-align: center;
      border: 0.5px solid ${color.brand.primaryBlack};
      color: ${color.brand.primaryBlack};
    }

    h2 {
      margin: 0px;
      font-style: italic;
      color: ${color.brand.primaryBlack};
    }
  `
};
