import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export default createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  ${fonts}
`;
