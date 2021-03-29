import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export default createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
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
  :focus {
    outline: ${({ theme }) => theme.colors.firefly} auto 1px;
  }
  ${fonts}
`;
