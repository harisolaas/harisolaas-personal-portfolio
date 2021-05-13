import { css, FlattenSimpleInterpolation } from "styled-components";

type Media = (screenSize: "medium" | "large") => WrapStyles;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WrapStyles = (...args: any) => FlattenSimpleInterpolation;

const media: Media = (screenSize) => {
  const mediaQueries = { medium: 768, large: 1280 };
  const wrapStyles: WrapStyles = (...cssArgs) => {
    return css`
      @media (min-width: ${mediaQueries[screenSize]}px) {
        ${css(cssArgs)}
      }
    `;
  };

  return wrapStyles;
};

export default media;
