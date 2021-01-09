import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    background: ${color.brand.primaryWhite};
    box-shadow: 0 3px 49px 0 rgba(0, 0, 0, 0.2);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 30%;
  `,
  Header: styled.div`
    padding: 5% 5% 0% 5%;
    text-align: center;

    .title {
      font-family: "Oswald", sans-serif;
    }

    .close {
      top: 4.5%;
      stroke: ${color.brand.primaryBlack};
      position: absolute;
      right: 4%;
      cursor: pointer;
    }
  `
};

export const Title = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const Close = styled.div`
//   margin: 0% 4%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
