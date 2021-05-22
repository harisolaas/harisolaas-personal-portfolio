import { DefaultTheme } from "styled-components";

// Fonts
const fallbackSansSerifFonts =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

// Colors
const background = "#173246";
const black = "#000000";
const firefly = "#fafec3";
const primary = "#eeeeee";
const primaryOff = "#eeeeee55";
const shadow = "#0e1e2b";

const theme: DefaultTheme = {
  colors: {
    background,
    black,
    firefly,
    primary,
    primaryOff,
    shadow,
  },
  fonts: {
    primary: `Roboto, ${fallbackSansSerifFonts}`,
    secondary: `Montserrat, ${fallbackSansSerifFonts}`,
  },
  footerHeight: 48,
  headerHeight: 76,
  textShadow: `-1px 0.7px 0px ${black}`,
};

export default theme;
