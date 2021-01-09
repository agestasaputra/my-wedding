import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    /* display: flex;
    flex-flow: column nowrap; */
    display: inline-block;
    cursor: pointer;
    width: ${props => (props.width ? props.width : "unset")};

    &:hover {
      /* border: 1px solid ${color.brand.primaryBlack}; */
      border: 1px solid rgba(0,0,0,0.5);
    }
  `,
  Top: styled.div`
    /* height: 30vw; */
    padding: 3% 3% 6% 3%;

    img {
      width: 100%;
      height: 100%;
    }
  `,
  Bottom: styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;

    h5 {
      cursor: text;
    }
  `
};

export const ContainerBottom = {
  Left: styled.div`
    flex: 1;
    margin-left: 6%;
  `,
  Middle: styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  `,
  Right: styled.div`
    flex: 1;
    margin-right: 6%;
  `
};

export const ContainerBottomLeft = {
  Top: styled.div`
    h5 {
      display: inline-block;
      margin: 0px;
    }
  `,
  Bottom: styled.div``
};

export const ContainerBottomMiddle = {
  Left: styled.div`
    svg {
      &:hover {
        fill: burlywood;
      }
    }
  `,
  Right: styled.div`
    svg {
      &:hover {
        fill: burlywood;
      }
    }
  `
};

export const ContainerBottomRight = {
  Top: styled.div`
    text-align: right;

    svg {
      margin-left: 5%;
      opacity: 0.6;

      &.circle-black {
        fill: black;

        &:hover {
          opacity: 1;
        }
      }
      &.circle-white {
        fill: white;

        &:hover {
          opacity: 1;
        }
      }
      &.circle-red {
        fill: red;

        &:hover {
          opacity: 1;
        }
      }
      &.circle-blue {
        fill: blue;

        &:hover {
          opacity: 1;
        }
      }
    }
  `,
  Bottom: styled.div`
    text-align: right;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
};
