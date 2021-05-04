import React from "react";
import styled from "styled-components";

interface ButtonPlayPausetProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: string;
  status?: Status;
}
type Status = "play" | "pause";

const Button = styled.button<{ status: Status }>`
  background: unset;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: transparent;
  filter: url(#round);
  height: 36px;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 36px;
  ::after,
  ::before {
    background-color: ${({ theme }) => theme.colors.primary};
    content: "";
    height: 43%;
    left: 28.5%;
    margin: auto;
    position: absolute;
    top: 28.5%;
    transform: rotate(${({ status }) => (status === "play" ? 0 : "-90deg")});
    transition: all 0.3s;
    width: 43%;
  }
  ::after {
    clip-path: polygon(
      ${({ status }) =>
        status === "play"
          ? "13% 50.5%, 100% 50.5%, 100% 50.5%, 13% 100%"
          : "0 62%, 100% 62%, 100% 92%, 0 92%"}
    );
  }
  ::before {
    clip-path: polygon(
      ${({ status }) =>
        status === "play"
          ? "13% 0, 100% 50.5%, 100% 50.5%, 13% 50.5%"
          : "0 7%, 100% 7%, 100% 37%, 0 37%"}
    );
  }
`;

export const ButtonPlayPause: React.FC<ButtonPlayPausetProps> = ({
  children,
  status = "pause",
  ...props
}) => {
  return (
    <Button {...props} status={status}>
      {children || status}
    </Button>
  );
};

export default ButtonPlayPause;
