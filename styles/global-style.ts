import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
  }
  body {
    position: relative;
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
`;
