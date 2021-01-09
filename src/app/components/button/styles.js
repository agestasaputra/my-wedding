import styled from "styled-components";
import color from "config/guidlines/color";

export const Wrapper = styled.div`
  cursor: pointer;
  width: ${props => props.width && props.width};
  background: ${color.brand.primaryBlack};
  height: unset;
  border: unset;

  &.disabled {
    border: 1px solid #9c9c9c;
    /* border: 1px solid ${color.gray}; */
    cursor: not-allowed;
    background: #e8e9e9;
  }

  &.btn-page {
    border-radius: 5em;
    color: ${color.brand.primaryWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5vw;
    height: 2.5vw;
    max-width: 50px;
    max-height: 50px;
    margin: 0px 5px;
  }
`;
export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: unset;
  color: #fff;
  width: 100%;
  padding: 8px 0px;
  cursor: inherit;

  /*
    :hover {
      opacity: 0.8;
    }
  */

  &.disabled {
    color: ${color.gray};
    pointer-events: none;
  }

  svg {
    fill: #fff;
  }

  &.outline {
    border: 1px solid black;
    background: #fff;
    color: ${color.brand.primaryBlack};

    :hover {
      svg {
        fill: ${color.brand.primaryBlack};
      }
    }
  }

  &.btn-page {
    border-radius: 5em;
    color: ${color.brand.primaryWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5vw;
    height: 2.5vw;
    max-width: 50px;
    max-height: 50px;
    margin: 0px 5px;
  }
`;
