import styled from "styled-components";

interface ButtonPrevNextProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: string;
}

const Button = styled.button<{ height?: number }>`
  background: unset;
  border: unset;
  color: transparent;
  height: 36px;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 27px;
  ::after,
  ::before {
    background-color: ${({ theme }) => theme.colors.primary};
    content: "";
    height: 43%;
    position: absolute;
    top: 28.5%;
  }
  ::before {
    left: 28.5%;
    width: 43%;
  }
`;
const NextButton = styled(Button)`
  ::after {
    right: 28.5%;
    width: 4%;
  }
  ::before {
    clip-path: polygon(7% 0, 92% 50.5%, 92% 50.5%, 7% 100%);
  }
`;
const PrevButton = styled(Button)`
  ::after {
    left: 28.5%;
    width: 4%;
  }
  ::before {
    clip-path: polygon(92% 0, 7% 50.5%, 7% 50.5%, 92% 100%);
  }
`;

const ButtonNext: React.FC<ButtonPrevNextProps> = ({ children, ...props }) => (
  <NextButton {...props}>{children || "Next"}</NextButton>
);

const ButtonPrev: React.FC<ButtonPrevNextProps> = ({ children, ...props }) => (
  <PrevButton {...props}>{children || "Previous"}</PrevButton>
);

export { ButtonNext, ButtonPrev };
