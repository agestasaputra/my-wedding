import styled from "styled-components";
import color from "config/guidlines/color";
import {
  XS_DEVICES_WIDTH,
  S_DEVICES_WIDTH,
  M_DEVICES_WIDTH
} from "config/guidlines/display";

export const H1Styles = styled.h1`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 27px;
  font-weight: bold;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 22px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 32px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 18px;
    line-height: 15px;
  }
`;

export const H2Styles = styled.h2`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 22px;
  font-weight: bold;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 20px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 29px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 16px;
    line-height: 15px;
  }
`;

export const H3Styles = styled.h3`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 17px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 27px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 14px;
    line-height: 15px;
  }
`;

export const H4Styles = styled.h4`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 17px;
  font-weight: bold;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 14px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 19px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const H5Styles = styled.h5`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 13px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 22px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 11px;
    line-height: 15px;
  }
`;

export const H6Styles = styled.h5`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 11px;
  font-weight: bold;
  margin: 0px;
  line-height: 15px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 10px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 18px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 9px;
    line-height: 15px;
  }
`;

export const P1Styles = styled.p`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 18px;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 14px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 18px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 14px;
    line-height: 15px;
  }
`;

export const P2Styles = styled.p`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 16px;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 12px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 17px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const P3Styles = styled.p`
  font-family: "Overpass", sans-serif;
  color: ${color.brand.primaryBlack};
  font-size: 14px;
  margin: 0px;
  line-height: 22px;

  @media (max-width: ${M_DEVICES_WIDTH}) {
    font-size: 13px;
  }

  @media (max-width: ${S_DEVICES_WIDTH}) {
    font-size: 16px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    font-size: 11px;
    line-height: 15px;
  }
`;
