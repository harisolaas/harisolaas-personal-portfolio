import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      black: string;
      firefly: string;
      primary: string;
    };
    fonts: { primary: string; secondary: string };
    footerHeight: string;
    headerHeight: string;
    textShadow: string;
  }
}
