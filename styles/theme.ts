import { DefaultTheme } from "styled-components";

const black = "#000000";
const primary = "#eeeeee";
const background = "#173246";
const firefly = "#fafec3";

const theme: DefaultTheme = {
  colors: {
    background,
    black,
    firefly,
    primary,
  },
  footerHeight: "28px",
  headerHeight: "76px",
  textShadow: `-1px 0.7px 0px ${black}`,
};

export default theme;
