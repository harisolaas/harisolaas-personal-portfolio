import { css } from "styled-components";

export default css`
  @font-face {
    font-family: "Roboto";
    src: url("${process.env.SITE_URL}fonts/Roboto-Regular.woff2");
    src: url("${process.env.SITE_URL}fonts/Roboto-Regular.woff2")
        format("woff2"),
      url("${process.env.SITE_URL}fonts/Roboto-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url("${process.env.SITE_URL}fonts/Roboto-Bold.woff2");
    src: url("${process.env.SITE_URL}fonts/Roboto-Bold.woff2") format("woff2"),
      url("${process.env.SITE_URL}fonts/Roboto-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("${process.env.SITE_URL}fonts/Montserrat-Medium.woff2");
    src: url("${process.env.SITE_URL}fonts/Montserrat-Medium.woff2")
        format("woff2"),
      url("${process.env.SITE_URL}fonts/Montserrat-Medium.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("${process.env.SITE_URL}fonts/Montserrat-Bold.woff2");
    src: url("${process.env.SITE_URL}fonts/Montserrat-Bold.woff2")
        format("woff2"),
      url("${process.env.SITE_URL}fonts/Montserrat-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
`;
