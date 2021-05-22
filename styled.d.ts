import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      black: string;
      firefly: string;
      primary: string;
      primaryOff: string;
      shadow: string;
    };
    fonts: { primary: string; secondary: string };
    footerHeight: number;
    headerHeight: number;
    textShadow: string;
  }
}
