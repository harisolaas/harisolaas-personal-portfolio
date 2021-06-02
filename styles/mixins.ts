import { css } from "styled-components";

export const defaultText = css`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: ${({ theme }) => theme.textShadow};
`;
export const globalPadding = css`
  padding: 0 36px;
`;
export const heading = css`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.25;
  text-shadow: ${({ theme }) => theme.textShadow};
`;
export const firefly = css`
  background-color: ${({ theme }) => theme.colors.firefly};
  border-radius: 50%;
  box-shadow: 0px 0 30px 10px ${({ theme }) => theme.colors.firefly},
    inset 0.5px 0.5px 1px ${({ theme }) => theme.colors.black};
  height: 3px;
  width: 4px;
`;
export const fireflyAnimationFinalPosition = css`
  transform: rotate(337deg) translateX(20px) rotate(-337deg) scale(1.5);
`;
