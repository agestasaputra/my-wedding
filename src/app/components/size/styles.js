import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  display: inline-block;
  padding: 0px 5px;
  margin-right: 5px;
  cursor: pointer;
  color: ${color.gray};

  &.active {
    border: 1px solid black;
  }

  :hover {
    border: 1px solid black;
  }
`;
