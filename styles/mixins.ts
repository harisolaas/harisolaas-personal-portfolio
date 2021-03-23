import { css } from "styled-components";

export const defaultText = css`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
`;
export const globalPadding = css`
  padding: 0 36px;
`;
export const heading = css`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.25;
`;
